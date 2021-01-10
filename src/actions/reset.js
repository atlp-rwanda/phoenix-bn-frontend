import axios from 'axios';
import { successToast } from '../helpers/httpRequest';

export const forgotPassword = async (data) => {
axios.post('/users/forgot-password', data).then((response) => {
    successToast(response.data.message);
  }).catch((err) => {
    console.log(err);
  });
};

export const newPassword = async (data, token) => {
  axios.put(`/users/reset-password/${token}`, data).then((response) => {
    successToast(response.data.message);
  }).catch((err) => {
    console.log(err);
  });
};
