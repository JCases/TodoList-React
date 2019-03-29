import { createStore, Reducer } from 'redux';
import { ITodoItem } from '../../../shared/interfaces';
import { constants } from '../actions/index';

export interface IInitialState {
  visible?: boolean;
  todo?: ITodoItem;
}

const initialState: IInitialState = {
  visible: false,
};

const reducer: Reducer<IInitialState> =  (state: IInitialState = initialState, action): IInitialState => {
  switch (action.type) {
    case constants.SET_VISIBILITY:
      return { ...state, visible: action.data };
    case constants.ADD_TODO:
      return { ...state, todo: action.data };
    default:
      return state || initialState;
  }
};

export const store = createStore(reducer);
