import { combineReducers } from 'redux';
import counterReducer from './counter';

const combinedReducers = combineReducers({
  counter: counterReducer,
});

export default combinedReducers;
