import React, { Component } from 'react';

import Style from 'styled-components';
import { ButtonCancel, ButtonSave, Checkbox, ContentTodoItem, StructureTodoItem, Text, TextInput } from './Style';

import { IResponse, ITodoItem } from '../../../../shared/interfaces/index';

import todosHttp from '../../utils/http';

interface IStateTodoItem {
  todo?: ITodoItem;
  editable?: boolean;
  newLabel?: string;
}

interface IPropsTodoItem extends ITodoItem {
  refreshTodos?: () => Promise<void>;
}

enum Buttons {
  delete = 'delete',
  cancel = 'cancel',
  save = 'save',
}

export class TodoItem extends Component<IPropsTodoItem, IStateTodoItem> {
  constructor(props: IPropsTodoItem) {
    super(props);
    this.state = {
      todo: {
        ...props,
      },
      editable: false,
      newLabel: '',
    };
  }

  public render() {
    // Style Underline
    const TextTodo = this.state.todo!.completed ? Style(Text)`text-decoration: line-through;` : Style(Text)``;
    return (
      <ContentTodoItem>
        <StructureTodoItem>
          {!this.state.editable ?
            <React.Fragment>
              <TextTodo title="label"
                onDoubleClick={ event => { this.setState({ editable: !this.state.editable, newLabel: this.state.todo!.label }); }}>{this.state.todo!.label}</TextTodo>
              <Checkbox type="checkbox" title="completed"
                checked={this.state.todo!.completed}
                onChange={event => this.onChangeState(event.target.checked)}></Checkbox>
            </React.Fragment>
            :
            <React.Fragment>
              <TextInput type="text" title="label" value={ this.state.newLabel } onChange={(event) => { this.setState({ newLabel: event.target.value }); }}></TextInput>
              <div>
                <ButtonCancel onClick={ () => this.onEditClose(Buttons.delete) }>D</ButtonCancel>
                <ButtonCancel onClick={ () => this.onEditClose(Buttons.cancel) }>X</ButtonCancel>
                <ButtonSave onClick={ () => this.onEditClose(Buttons.save, this.state.newLabel!) }>S</ButtonSave>
              </div>
            </React.Fragment>}
        </StructureTodoItem>
      </ContentTodoItem>
    );
  }

  private async onEditClose(edit: Buttons, value?: boolean | string) {
    const nTodo = this.state.todo!;
    if (edit === Buttons.save) await this.onChangeState(value);
    if (edit === Buttons.delete) await this.onDeleteState(nTodo);
    this.setState({ editable: !this.state.editable });

  }

  private async onDeleteState(value?: ITodoItem) {
    await this.setStateAsync({});
    await this.deleteTodo(value);
    () => this.props.refreshTodos!();
  }

  private async onChangeState(value?: boolean | string) {
    await this.setStateAsync(value);
    this.changeTodo(value);
  }

  private deleteTodo(value?: ITodoItem) {
    return todosHttp.delete(`/v1/todo/${value!.id}`).then(r => {
      console.log(this.state.todo);
    }).catch(e => {
      this.setState({
        todo: value,
      });
    });
  }

  private changeTodo(value?: boolean | string) {
    return todosHttp.put<IResponse<ITodoItem[]>>('/v1/todo', this.state.todo).then(r => {
      console.log(this.state.todo);
    }).catch(e => {
      this.setStateAsync(value);
    });
  }

  private async setStateAsync(value?: boolean | string | ITodoItem) {
    let objContainer: ITodoItem;
    switch (typeof value) {
      case 'boolean':
        objContainer = { ...this.state.todo, completed: value };
        break;
      case 'string':
        objContainer = { ...this.state.todo, label: value };
        break;
      case 'object':
        objContainer = { };
        break;
    }

    return new Promise(resolve => {
      this.setState({
        todo: {
          ...objContainer,
        },
      }, resolve);
    });
  }
}
