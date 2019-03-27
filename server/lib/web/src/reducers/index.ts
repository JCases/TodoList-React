import { combineReducers, createStore, Reducer } from 'redux';
import { ITodoItem } from '../../../shared/interfaces';

export interface IInitialState {
  visible: boolean;
  todos: ITodoItem[];
}

const initialState: IInitialState = {
  todos: [],
  visible: false,
};

const reducer: Reducer<IInitialState> =  (state: IInitialState = initialState, {}): IInitialState => {
  return { ...state };
};

export const store = createStore(reducer);
