import store from '../store';
import { SET_SCREEN_WIDTH } from './actionTypes';

const updateScreenSize = async (data) => {
  await store.dispatch({ type: SET_SCREEN_WIDTH, payload: data });
};

export default updateScreenSize;
