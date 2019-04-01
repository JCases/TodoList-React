import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore, Reducer } from 'redux';
import ReduxThunk from 'redux-thunk';

import { ITodoItem } from '../../../shared/interfaces';
import { constants } from '../actions/index';

export interface IInitialState {
  visible?: boolean;
  todos?: ITodoItem[];
}

const initialState: IInitialState = {
  visible: false,
  todos: [],
};

const reducer: Reducer<IInitialState> =  (state: IInitialState = initialState, action): IInitialState => {
  console.log(action);
  switch (action.type) {
    case constants.SET_VISIBILITY:
      return { ...state, visible: action.data };
    case constants.GET_TODOS:
      return { ...state, todos: action.data };
    case constants.ADD_TODO:
      return { ...state, todos: action.data };
    case constants.MODIFY_TODO:
      return { ...state, todos: action.data };
    case constants.DELETE_TODO:
      return { ...state, todos: action.data };
    default:
      return state || initialState;
  }
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({todos: reducer}),
  composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        ReduxThunk,
    ),
));
