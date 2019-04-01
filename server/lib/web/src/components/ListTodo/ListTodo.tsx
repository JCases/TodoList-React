import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ITodoItem } from '../../../../shared/interfaces';
import { TodoItem } from '../TodoItem/TodoItem';
import { ContentListTodo } from './Style';

import { getTodos } from '../../actions';
import { IInitialState } from '../../reducers';

interface IStatePopUp {
  todos: ITodoItem[];
}

interface IPropsPopUp {
  todos?: ITodoItem[];
  getTodos: () => ITodoItem[];
}

class ListTodo extends Component<IPropsPopUp, IStatePopUp> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  public async componentDidMount() {
    console.log(this.props);
    try {
      this.props.getTodos();
    } catch (error) {
      console.error(error);
    }
  }

  public render() {
    return (
      <ContentListTodo>
        { this.props.todos ? this.props.todos!.map(t => <TodoItem key={t.id} id={t.id} label={t.label} completed={t.completed} refreshTodos={ (id) => this.refreshTodos(id) } />) : null}
      </ContentListTodo>
    );
  }

  private async refreshTodos(id: string) {
    this.setState({ todos: this.props.todos!.filter(t => t.id! !== id) });
  }

  private getTodos() {
    return this.props.getTodos();
  }
}

const mapStateToProps = (state: any) => ({ todos: state.todos!.todos });
const mapDispatchToProps = (dispatch: any) => ({ getTodos: () => dispatch(getTodos()) });

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
