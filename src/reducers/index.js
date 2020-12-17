import { combineReducers } from 'redux';
import userReducer from './auth.js';

const combinedReducers = combineReducers({
  user: userReducer,
});

export default combinedReducers;
