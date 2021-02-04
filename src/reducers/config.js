import { SET_SCREEN_WIDTH, SHOW_PROFILE_UPDATE_PAGE, UPDATE_USER_PROFILE } from '../actions/actionTypes';

const initialState = {
  width: 0,
  showProfile: true,
};

const config = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN_WIDTH:
      return state = {
        ...state,
        width: action.payload,
      };
    case SHOW_PROFILE_UPDATE_PAGE || UPDATE_USER_PROFILE:
      return state = {
        ...state,
        showProfile: !state.showProfile,
      };
    case UPDATE_USER_PROFILE:
      return state = {
        ...state,
        showProfile: true
      };

    default:
      return state;
  }
};

export default config;
