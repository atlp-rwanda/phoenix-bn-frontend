import axios from 'axios';
import store from '../store';
import { REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL } from './actionTypes';
import { successToast, errorToast } from '../helpers/httpRequest';

export const authenticatedUser = async (data, type) => {
  await store.dispatch({ type, payload: data });
};

export const register = ({
  firstName, lastName, email, password, confirmPassword,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {
    firstName, lastName, email, password, confirmPassword,
  };
  await axios
    .post('/users/signup', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      successToast(res.data.message);
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      const message = (err.response ? err.response.data.message : err);
      errorToast(message);
    });
};

export const login = ({email, password}) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // REQUEST BODY
  const body = { email, password };
  axios
    .post("/users/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
      successToast(res.data.message);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      const message = (err.response ? err.response.data.message : err);
      errorToast(message);
    });
};
