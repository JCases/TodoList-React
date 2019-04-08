import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { CustomLink, PopUpButton } from './Style';
import { ContentMain } from '../../shared/styles/Style';

import { setVisibility } from '../../actions';

import ListTodo from '../ListTodo/ListTodo';

interface IPropsMain {
  visibility?: boolean;
  setVisibility?: (visibility: boolean) => void;
}

export class Main extends Component<IPropsMain, any> {
  public render() {
    return (
      <ContentMain>
        <CustomLink to={this.props.visibility ? '/' : '/add'}>
          <PopUpButton variant="contained" color="primary">ADD</PopUpButton>
        </CustomLink>
        <ListTodo />
      </ContentMain>
    );
  }
}
