import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ContentMain } from '../../shared/styles/Style';

import ListTodo from '../ListTodo/ListTodo';

export class Login extends Component<any, any> {
  public render() {
    return (
      <ContentMain>
        <ListTodo />
      </ContentMain>
    );
  }
}
