import React, { Component } from 'react';

import { TodoItem } from '../TodoItem/TodoItem';
import { ContentListTodo } from './Style';

export class ListTodo extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ContentListTodo>
        <TodoItem id="1" label="ALGO DE TEXTO PARA VERLO" completed={false} />
      </ContentListTodo>
    );
  }
}
