import { LOGIN,REGISTRATION_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  userData: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN || REGISTRATION_SUCCESS:
      return state = {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
      };
  }
  return state;
};

export default users;
