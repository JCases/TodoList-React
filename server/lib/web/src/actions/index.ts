import { Dispatch } from 'redux';
import { IResponse, ITodoItem } from '../../../shared/interfaces/index';

import todosHttp from '../utils/http';

export const constants = {
  SET_VISIBILITY: 'setVisibility',
  GET_TODOS: 'getTodos',
  TODOS_RECEIVED: 'todosReceived',
  ADD_TODO: 'addTodo',
  MODIFY_TODO: 'modifyTodo',
  DELETE_TODO: 'deleteTodo',
};

export const setVisibility = (visibility: boolean) => ({ type: constants.SET_VISIBILITY, data: visibility });
export const getTodosAction = () => ({ type: constants.GET_TODOS });
export const todosReceivedAction = (todos: ITodoItem[]) => ({ type: constants.TODOS_RECEIVED, data: todos });

export const addTodo = (todos: ITodoItem) => ({ type: constants.ADD_TODO, data: todos });
export const modifyTodo = (todos: ITodoItem) => ({ type: constants.MODIFY_TODO, data: todos });
export const deleteTodo = (todos: ITodoItem) => ({ type: constants.DELETE_TODO, data: todos });

export const getTodos = () => (dispatch: Dispatch) => {
  dispatch(getTodosAction());
  return todosHttp.get<IResponse<ITodoItem[]>>('/v1/todo').then(r => {
    if (r.data && r.data.result) dispatch(todosReceivedAction(r.data.result!));
  });
};
