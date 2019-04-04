import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
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
  switch (action.type) {
    case constants.SET_VISIBILITY:
      return { ...state, visible: action.data };
    case constants.TODOS_RECEIVED:
      return { ...state, todos: action.data };
    case constants.ADD_TODO:
      // New Array for Update UI in First Position
      const todosAdd = [...state.todos!];
      todosAdd.unshift(action.data);
      return { ...state, todos: todosAdd };
    case constants.MODIFY_TODO:
      // Modify Object Inside New Array for Update UI
      const position = state.todos!.indexOf(state.todos!.find(t => t.id! === action.data.id)!);
      const todosModify = [...state.todos!];
      todosModify.splice(position, 1, action.data);
      return { ...state, todos: todosModify };
    case constants.DELETE_TODO:
      // Delete Object Inside New Array for Update UI
      const todosDelete = [...state.todos!.filter(t => t.id! !== action.data.id)];
      return { ...state, todos: todosDelete };
    default:
      return state || initialState;
  }
};

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const history = createBrowserHistory();

export const store = createStore(
  combineReducers({ todos: reducer }),
  composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        ReduxThunk,
    ),
));
