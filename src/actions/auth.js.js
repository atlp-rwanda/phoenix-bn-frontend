import { LOGIN } from './actionTypes';
import store from '../store';

export const logUserIn = (data) => {
  store.dispatch({ type: LOGIN, payload: data });
};
