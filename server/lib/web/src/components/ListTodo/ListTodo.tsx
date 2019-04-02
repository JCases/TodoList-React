import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ITodoItem } from '../../../../shared/interfaces';
import TodoItem from '../TodoItem/TodoItem';
import { ContentListTodo } from './Style';

import { getTodos } from '../../actions';

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
    try {
      await this.props.getTodos();
    } catch (error) {
      console.error(error);
    }
  }

  public render() {
    const { todos } = this.props;
    return (
      <ContentListTodo>
        { todos ? todos!.map(t => <TodoItem key={t.id} id={t.id} label={t.label} completed={t.completed} />) : null}
      </ContentListTodo>
    );
  }
}

const mapStateToProps = (state: any) => ({ todos: state.todos!.todos });
const mapDispatchToProps = (dispatch: any) => ({ getTodos: () => dispatch(getTodos()) });

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
