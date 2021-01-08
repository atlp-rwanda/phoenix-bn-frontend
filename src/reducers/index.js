import { combineReducers } from 'redux';
import auth from './auth.js';

const combinedReducers = combineReducers({
  auth,
});

export default combinedReducers;