import { SET_SCREEN_WIDTH } from '../actions/actionTypes';

const initialState = {
  width: 0,
};

const config = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN_WIDTH:
      return state = {
        ...state,
        width: action.payload,
      };
    default:
      return state;
  }
};

export default config;
