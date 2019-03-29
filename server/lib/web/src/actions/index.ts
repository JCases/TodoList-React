import { Dispatch } from 'redux';
import { IResponse, ITodoItem } from '../../../shared/interfaces/index';

export const constants = {
  SET_VISIBILITY: 'setVisibility',
  ADD_TODO: ' addTodo',
};

export const setVisibility = (visibility: boolean) => ({ type: constants.SET_VISIBILITY, data: visibility });
export const addTodo = (todo: ITodoItem) => ({ type: constants.ADD_TODO, data: todo });
