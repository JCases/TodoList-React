import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ContentMain, CustomLink, PopUpButton } from './Style';

import { setVisibility } from '../../actions';

import ListTodo from '../ListTodo/ListTodo';

interface IPropsMain {
  visibility?: boolean;
  setVisibility?: (visibility: boolean) => void;
}

class Main extends Component<IPropsMain, any> {
  public render() {
    return (
      <ContentMain>
        <PopUpButton onClick={() => this.showPopUp()}>
          <CustomLink to={this.props.visibility ? '/' : '/add'}>{ this.props.visibility ? 'CLOSE' : 'ADD' }</CustomLink>
        </PopUpButton>
        <ListTodo />
      </ContentMain>
    );
  }

  private showPopUp() {
    this.props.setVisibility!(!this.props.visibility);
  }
}

const mapStateToProps = (state: any) => ({ visibility: state.todos!.visible });
const mapDispatchToProps = (dispatch: any) => ({ setVisibility: (visibility: boolean) => dispatch(setVisibility(visibility)) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
