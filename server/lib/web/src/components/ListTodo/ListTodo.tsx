import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IResponse, ITodoItem } from '../../../../shared/interfaces';
import { TodoItem } from '../TodoItem/TodoItem';
import { ContentListTodo } from './Style';

import { addTodo } from '../../actions';
import todosHttp from '../../utils/http';

class ListTodo extends Component<any, { todos: ITodoItem[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  public async componentDidMount() {
    try {
      this.setState({
        todos: (await this.getTodos()).data.result!,
      });
    } catch (error) {
      console.error(error);
    }
  }

  public render() {
    return (
      <ContentListTodo>
        {this.state.todos.map(t => <TodoItem key={t.id} id={t.id} label={t.label} completed={t.completed} refreshTodos={ (id) => this.refreshTodos(id) } />)}
      </ContentListTodo>
    );
  }

  private async refreshTodos(id: string) {
    this.setState({ todos: this.state.todos.filter(t => t.id! !== id) });
  }

  private async getTodos() {
    return todosHttp.get<IResponse<ITodoItem[]>>('/v1/todo');
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: any) => ({ addTodo: (todo: ITodoItem) => dispatch(addTodo(todo)) });

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
