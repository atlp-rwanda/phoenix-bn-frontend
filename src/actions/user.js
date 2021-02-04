import axios from 'axios'
import store from '../store'
import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from '../actions/actionTypes'
import { successToast, errorToast } from '../helpers/httpRequest'


export const getUsersProfile = (userId) => {

  axios.get('/users/profile/' + userId).then(response => {
    store.dispatch({ type: GET_USER_PROFILE, payload: response.data });

  }).catch(error => {
    alert(error)
  })

};


export const updateUsersProfile = (info) => {
  console.log(info);

  axios.put('/users/updateProfile/', info).then(response => {
    store.dispatch({ type: UPDATE_USER_PROFILE, payload: info });
    successToast(response.data.message);

  }).catch(error => {
    errorToast(error)
  })

};
