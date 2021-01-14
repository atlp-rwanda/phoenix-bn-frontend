import {
  REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  isLoading:false,
  userData: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return state = {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
    localStorage.setItem("token", action.payload.data.authToken);
      return state = {
        ...state,
        isAuthenticated: true,
        userData: action.payload.data,
      };
    case LOGOUT_SUCCESS:
    localStorage.removeItem("token");
      return state = {
        ...state,
        isAuthenticated: false,
        userData: {},
      };
    case REGISTER_FAIL:
      return state = {
        ...state,
        isAuthenticated: false,
      };
  }
  return state;
};

export default users;
