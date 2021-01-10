import { LOGINSUCESS } from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  userData: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
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
