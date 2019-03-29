import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ContentMain, PopUpButton } from './Style';

import { setVisibility } from '../../actions';
import { IInitialState } from '../../reducers/index';

import ListTodo from '../ListTodo/ListTodo';

interface IPropsMain {
  visibility?: boolean;
  setVisibility?: (visibility: boolean) => void;
}

class Main extends Component<IPropsMain, any> {
  public render() {
    return (
      <ContentMain>
        <PopUpButton onClick={() => this.showPopUp()}>{ this.props.visibility ? 'CLOSE' : 'ADD' }</PopUpButton>
        <ListTodo />
      </ContentMain>
    );
  }

  private showPopUp() {
    this.props.setVisibility!(!this.props.visibility);
  }
}

const mapStateToProps = (state: IInitialState) => ({ visibility: state.visible });
const mapDispatchToProps = (dispatch: any) => ({ setVisibility: (visibility: boolean) => dispatch(setVisibility(visibility)) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);
