import React, { Component } from 'react';

import { ContentMain, PopUpButton } from './Style';

import { ListTodo } from '../ListTodo/ListTodo';

export class Main extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <ContentMain>
        <PopUpButton> ADD </PopUpButton>
        <ListTodo />
      </ContentMain>
    );
  }
}
