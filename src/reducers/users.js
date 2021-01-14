import {
  LOGINSUCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL,
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: null,
  userData: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGINSUCESS:
      return state = {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case LOGOUT_SUCCESS:
      return state = {
        ...state,
        isAuthenticated: false,
        userData: action.payload,
      };
    case REGISTER_SUCCESS:
      return state = {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case REGISTER_FAIL:
      return state = {
        ...state,
        isAuthenticated: false,
        userData: action.payload,
      };
  }

  return state;
};

export default users;
