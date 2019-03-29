import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, TextInput } from '../../shared/styles/Style';
import { Checkbox, ContentInfo, ContentPopUp } from './Style';

import { IResponse, ITodoItem } from '../../../../shared/interfaces/index';
import { IInitialState } from '../../reducers/index';

import { setVisibility } from '../../actions';
import todosHttp from '../../utils/http';

interface IStatePopUp {
  label?: string;
  completed?: boolean;
}

interface IPropsPopUp {
  visibility?: boolean;
  setVisibility?: (visibility: boolean) => void;
}

class PopUp extends Component<IPropsPopUp, IStatePopUp> {
  constructor(props: any) {
    super(props);
    this.state = {
      label: '',
      completed: false,
    };
  }

  public render() {
    if (this.props.visibility) {
      return (
        <ContentPopUp>
          <ContentInfo>
            <TextInput type="text" title="label" value={ this.state.label! } onChange={(event) => { this.setState({ label: event.target.value }); }}></TextInput>
            <Checkbox type="checkbox" title="completed"
                checked={this.state.completed!}
                onChange={event => this.setState({ completed: event.target.checked })}></Checkbox>
          </ContentInfo>
          <Button disabled={ (this.state.label!.length === 0) } onClick={ (event) => this.addTodo(event) }>Add Todo</Button>
        </ContentPopUp>
      );
    }
    return null;
  }

  private addTodo(event: any) {
    if (this.state.label!.length > 0) {
      return todosHttp.post<IResponse<ITodoItem>>('/v1/todo', { label: this.state.label!, completed: this.state.completed! }).then(e => {
        this.setState({ label: '' });
        this.props.setVisibility!(!this.props.visibility);
      });
    }
  }
}

const mapStateToProps = (state: IInitialState) => ({ visibility: state.visible });
const mapDispatchToProps = (dispatch: any) => ({ setVisibility: (visibility: boolean) => dispatch(setVisibility(visibility)) });

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
