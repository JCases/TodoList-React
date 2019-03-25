import React, { Component } from 'react';
import { ContentHeader } from './Style';

export class Header extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      test: 'test',
    };
  }

  public render() {
    return (
      <ContentHeader>
        <h1>TodoList</h1>
      </ContentHeader>
    );
  }
}
