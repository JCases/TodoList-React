import React, { Component } from 'react';

import { Checkbox, ContentTodoItem, StructureTodoItem, Text } from './Style';

import { IResponse, ITodoItem } from '../../../../shared/interfaces/index';

import todosHttp from '../../utils/http';

interface IStateTodoItem {
  todo: ITodoItem;
}

export class TodoItem extends Component<ITodoItem, IStateTodoItem> {
  constructor(props: any) {
    super(props);
    this.state = {
      todo: {
        ...props,
      },
    };
  }

  public render() {
    return (
      <ContentTodoItem>
        <StructureTodoItem>
          <Text>{this.state.todo.label}</Text>
          <Checkbox type="checkbox" name="completed" checked={this.state.todo.completed} onChange={(event) => this.onChange(event)}></Checkbox>
        </StructureTodoItem>
      </ContentTodoItem>
    );
  }

  private onChange(event: any) {
    this.setState({
      todo: {
        ...this.state.todo,
        completed: !this.state.todo.completed,
      },
    }, () => {
      this.changeValueCompleted();
    });
  }

  private async changeValueCompleted() {
    return todosHttp.put<IResponse<ITodoItem[]>>('/v1/todo', this.state.todo).then(r => {
      console.log(this.state.todo);
    }).catch(e => {
      this.setState({
        todo: {
          ...this.state.todo,
          completed: !this.state.todo.completed,
        },
      });
      console.error(e);
    });
  }
}
