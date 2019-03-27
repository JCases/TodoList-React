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

  public async componentDidMount() {
    try {
      this.setState({
        todos: (await this.getTodos()).data.result!},
        );
    } catch (error) {
      console.error(error);
    }
  }

  public render() {
    return (
      <ContentListTodo>
        {this.state.todos.map(t => <TodoItem key={t.id} id={t.id} label={t.label} completed={t.completed} />)}
      </ContentListTodo>
    );
  }

  private async getTodos() {
    return todosHttp.get<IResponse<ITodoItem[]>>('/v1/todo');
  }
}
