import { REGISTRATION_SUCCESS } from './actionTypes';
import store from '../store';

export const registerUser = async (data) => {
  await store.dispatch({ type: REGISTRATION_SUCCESS, payload: data });
};
