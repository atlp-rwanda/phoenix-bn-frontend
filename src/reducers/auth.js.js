import { REGISTRATION_SUCCESS,LOGINSUCESS } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  userData: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return state = {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
    case LOGINSUCESS:
      return state = {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
  }
  return state;
};

export default users;
