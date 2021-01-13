import { combineReducers } from 'redux';
import auth from './auth';
import config from './config';

const combinedReducers = combineReducers({
  auth,
  config,
});

export default combinedReducers;
