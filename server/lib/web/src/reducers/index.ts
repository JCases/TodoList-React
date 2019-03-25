import { combineReducers, createStore } from 'redux';

const reducer: any = (state: any, action: any) => {
  return state || null;
};

const initialState: any = {

};

const cReducer = combineReducers({
  reducer,
});

export const store = createStore(cReducer, initialState);
