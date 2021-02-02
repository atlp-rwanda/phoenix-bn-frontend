import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from '../actions/actionTypes';

const users = (state = {}, action) => {

  switch (action.type) {
    case GET_USER_PROFILE:
      const { data } = action.payload
      return data;
    case UPDATE_USER_PROFILE:
      return action.payload;
  }


  return state;
};

export default users;
