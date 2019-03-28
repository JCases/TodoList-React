import React, { Component } from 'react';

import { IResponse, ITodoItem } from '../../../../shared/interfaces';
import { TodoItem } from '../TodoItem/TodoItem';
import { ContentListTodo } from './Style';

import todosHttp from '../../utils/http';

export class ListTodo extends Component<any, {todos: ITodoItem[]}> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  public componentDidMount() {
    this.refreshTodos();
  }

  public render() {
    return (
      <ContentListTodo>
        { /* TODO: REMOVE TEST ITEM */ }
        <TodoItem key="1" id="1" label="TEST" completed={false} refreshTodos={ this.refreshTodos } />
        {this.state.todos.map(t => <TodoItem key={t.id} id={t.id} label={t.label} completed={t.completed} refreshTodos={ this.refreshTodos } />)}
      </ContentListTodo>
    );
  }

  private async refreshTodos() {
    try {
      this.setState({
        todos: (await this.getTodos()).data.result!},
      );
    } catch (error) {
      console.error(error);
    }
  }

  private async getTodos() {
    return todosHttp.get<IResponse<ITodoItem[]>>('/v1/todo');
  }
}
