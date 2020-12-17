import { REGISTRATION_SUCCESS } from './actionTypes';
import {httpRequest,successToast} from '../helpers/httpRequest'
import store from '../store';
export const registerUser = (data) => {
  store.dispatch({ type: REGISTRATION_SUCCESS, payload: data });
};
