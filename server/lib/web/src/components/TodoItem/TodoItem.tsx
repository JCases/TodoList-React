import React, { Component } from 'react';
import { connect } from 'react-redux';

import Style from 'styled-components';
import { TextInput } from '../../shared/styles/Style';
import { CancelIcon, ButtonsActions, ThemeSave, ThemeDelete, ThemeCancel, ContentTodoItem, DeleteIcon, SaveIcon, StructureTodoItem, Text } from './Style';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { TextField, Checkbox } from '@material-ui/core';

import { IResponse, ITodoItem } from '../../../../shared/interfaces/index';

import { AxiosResponse } from 'axios';
import { deleteTodo, modifyTodo } from '../../actions';
import todosHttp from '../../utils/http';

interface IStateTodoItem {
  todo?: ITodoItem;
  editable?: boolean;
  newLabel?: string;
}

interface IPropsTodoItem extends ITodoItem {
  modifyTodo?: (todos: ITodoItem) => void;
  deleteTodo?: (todos: ITodoItem) => void;
}

enum Buttons {
  delete = 'delete',
  cancel = 'cancel',
  save = 'save',
}

class TodoItem extends Component<IPropsTodoItem, IStateTodoItem> {
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
                onDoubleClick={event => { this.setState({ editable: !this.state.editable, newLabel: this.state.todo!.label }); }}>{this.state.todo!.label}</TextTodo>
              <Checkbox type="checkbox" title="completed" style={ { padding: 0 } }
                checked={this.state.todo!.completed}
                onChange={event => this.onChangeState(event.target.checked)}></Checkbox>
            </React.Fragment>
            :
            <React.Fragment>
              <TextField type="text" id="label" label="Todo" style={ { width: '76%' } } value={this.state.newLabel} onChange={(event) => { this.setState({ newLabel: event.target.value }); }}></TextField>
              <div>
                <MuiThemeProvider theme={ThemeDelete}>
                  <ButtonsActions color="primary" onClick={() => this.onEditClose(Buttons.delete)}><DeleteIcon /></ButtonsActions>
                </MuiThemeProvider>
                <MuiThemeProvider theme={ThemeCancel}>
                  <ButtonsActions color="primary" onClick={() => this.onEditClose(Buttons.cancel)}><CancelIcon /></ButtonsActions>
                </MuiThemeProvider>
                <MuiThemeProvider theme={ThemeSave}>
                  <ButtonsActions color="primary" onClick={() => this.onEditClose(Buttons.save, this.state.newLabel!)}><SaveIcon /></ButtonsActions>
                </MuiThemeProvider>
                
              </div>
            </React.Fragment>}
        </StructureTodoItem>
      </ContentTodoItem>
    );
  }

  private async onEditClose(edit: Buttons, value?: boolean | string) {
    if (edit === Buttons.save && this.state.newLabel!.trim().length > 0) {
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
    this.props.deleteTodo!(value!);
  }

  private async onChangeState(value?: boolean | string) {
    await this.setStateAsync(value);
    await this.changeTodo(value);
    this.props.modifyTodo!(this.state.todo!);
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

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({
  modifyTodo: (todos: ITodoItem) => dispatch(modifyTodo(todos)),
  deleteTodo: (todos: ITodoItem) => dispatch(deleteTodo(todos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
