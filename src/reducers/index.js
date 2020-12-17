import { combineReducers } from 'redux';
import user from './auth.js';

const combinedReducers = combineReducers({
  user,
});

export default combinedReducers;
