import { combineReducers } from 'redux';
import auth from './auth';
import config from './config';
import userProfile from './userProfile';

const combinedReducers = combineReducers({
  auth,
  config,
  userProfile,
});

export default combinedReducers;
