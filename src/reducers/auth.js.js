import { LOGIN } from '../actions/actionTypes';

const initialState = {
  loggedIn: false,
  userData: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state = {
        ...state,
        loggedIn: true,
        userData: action.payload,
      };
  }
  return state;
};

export default users;
