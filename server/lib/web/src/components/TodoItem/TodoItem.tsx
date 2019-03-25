import React, { Component } from 'react';

import { ContentTodoItem } from './Style';

import { ITodoItem } from '../../../../shared/interfaces/index';

export class TodoItem extends Component<ITodoItem, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      label: this.props.label,
      completed: this.props.completed,
    };
  }

  public render() {
    return (
      <ContentTodoItem>
        <input type="checkbox" name="completed" checked={this.state.completed} onChange={(event) => this.onChange(event)}></input>
        <span>{this.state.label}</span>
      </ContentTodoItem>
    );
  }

  private onChange(event: any) {
    this.setState({
      completed: !this.state.completed,
    });
  }
}
