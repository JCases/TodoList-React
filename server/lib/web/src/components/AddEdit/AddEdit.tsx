import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Checkbox, TextField } from '@material-ui/core';
import { ButtonAdd, ContentAddEdit, ContentInfo } from './Style';

import { IResponse, ITodoItem } from '../../../../shared/interfaces/index';

import { addTodo, setVisibility } from '../../actions';
import todosHttp from '../../utils/http';

interface IStateAddEdit {
  label?: string;
  completed?: boolean;
}

interface IPropsAddEdit {
  visibility?: boolean;
  todos?: ITodoItem[];
  setVisibility?: (visibility: boolean) => void;
  addTodo?: (todos: ITodoItem) => void;
}

class AddEdit extends Component<IPropsAddEdit, IStateAddEdit> {
  constructor(props: any) {
    super(props);
    this.state = {
      label: '',
      completed: false,
    };
  }
  
  public render() {
    return (
      <ContentAddEdit>
        <ContentInfo>
          <TextField type="text" title="label" value={ this.state.label! } style={ { padding: 0, marginLeft: '2vw' } }
            onChange={(event) => { this.setState({ label: event.target.value }); }}></TextField>
          <Checkbox type="checkbox" title="completed"
            checked={this.state.completed!}
            onChange={event => this.setState({ completed: event.target.checked })}></Checkbox>
        </ContentInfo>
        <ButtonAdd disabled={ (this.state.label!.length === 0) } variant="contained" color="secondary" onClick={ (event) => this.addTodo(event) }>Add Todo</ButtonAdd>
      </ContentAddEdit>
    );
  }

  private addTodo(event: any) {
    if (this.state.label!.length > 0) {
      return todosHttp.post<IResponse<ITodoItem>>('/v1/todo', { label: this.state.label!, completed: this.state.completed! }).then(r => {
        this.setState({ label: '' });
        this.props.setVisibility!(!this.props.visibility);
        this.props.addTodo!(r.data.result!);
      });
    }
  }
}

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({ addTodo: (todos: ITodoItem) => dispatch(addTodo(todos)) });

export default connect(mapStateToProps, mapDispatchToProps)(AddEdit);
