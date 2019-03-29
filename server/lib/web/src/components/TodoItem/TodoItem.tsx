import React, { Component } from 'react';

import Style from 'styled-components';
import { TextInput } from '../../shared/styles/Style';
import { ButtonCancel, ButtonDelete, ButtonSave, CancelIcon, Checkbox, ContentTodoItem, DeleteIcon, SaveIcon, StructureTodoItem, Text } from './Style';

import { IResponse, ITodoItem } from '../../../../shared/interfaces/index';

import { AxiosResponse } from 'axios';
import todosHttp from '../../utils/http';

interface IStateTodoItem {
  todo?: ITodoItem;
  editable?: boolean;
  newLabel?: string;
}

interface IPropsTodoItem extends ITodoItem {
  refreshTodos?: (id: string) => Promise<void>;
}

enum Buttons {
  delete = 'delete',
  cancel = 'cancel',
  save = 'save',
}

export class TodoItem extends Component<IPropsTodoItem, IStateTodoItem> {
  private onChange: Promise<void> | undefined;
  private onDelete: Promise<void | AxiosResponse<any>> | undefined;

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

  public componentWillUnmount() {
    delete this.onChange;
    delete this.onDelete;
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
                onDoubleClick={ event => { this.setState({ editable: !this.state.editable, newLabel: this.state.todo!.label }); }}>{ this.state.todo!.label }</TextTodo>
              <Checkbox type="checkbox" title="completed"
                checked={this.state.todo!.completed}
                onChange={event => this.onChangeState(event.target.checked)}></Checkbox>
            </React.Fragment>
            :
            <React.Fragment>
              <TextInput type="text" title="label" value={ this.state.newLabel } onChange={(event) => { this.setState({ newLabel: event.target.value }); }}></TextInput>
              <div>
                <ButtonDelete onClick={ () => this.onEditClose(Buttons.delete) }><DeleteIcon/></ButtonDelete>
                <ButtonCancel onClick={ () => this.onEditClose(Buttons.cancel) }><CancelIcon/></ButtonCancel>
                <ButtonSave onClick={ () => this.onEditClose(Buttons.save, this.state.newLabel!) }><SaveIcon/></ButtonSave>
              </div>
            </React.Fragment>}
        </StructureTodoItem>
      </ContentTodoItem>
    );
  }

  private async onEditClose(edit: Buttons, value?: boolean | string) {
    if (edit === Buttons.save && this.state.newLabel!.length > 0) {
      await this.onChangeState(value);
      this.setState({ editable: !this.state.editable });
    }
    if (edit === Buttons.delete) {
      await this.onDeleteState(this.state.todo!);
      this.setState({ editable: !this.state.editable });
    }
    if (edit === Buttons.cancel) {
      this.setState({ editable: !this.state.editable });
    }
  }

  private async onDeleteState(value?: ITodoItem) {
    await this.deleteTodo(value);
    this.props.refreshTodos!(value!.id!);
  }

  private async onChangeState(value?: boolean | string) {
    await this.setStateAsync(value);
    this.changeTodo(value);
  }

  private deleteTodo(value?: ITodoItem) {
    return this.onDelete = todosHttp.delete(`/v1/todo/${value!.id}`);
  }

  private changeTodo(value?: boolean | string) {
    return todosHttp.put<IResponse<ITodoItem[]>>('/v1/todo', this.state.todo).then().catch(e => {
      this.setStateAsync(value);
    });
  }

  private async setStateAsync(value?: boolean | string) {
    let objContainer: ITodoItem;
    switch (typeof value) {
      case 'boolean':
        objContainer = { ...this.state.todo, completed: value };
        break;
      case 'string':
        objContainer = { ...this.state.todo, label: value };
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
