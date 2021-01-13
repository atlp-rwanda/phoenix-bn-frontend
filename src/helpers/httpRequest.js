import axios from 'axios';
import Toastify from 'toastify-js';

const errorToast = (message) => {
  Toastify({
    text: message,
    backgroundColor: '#ff4d4d',
    className: 'info',
  }).showToast();
};

const successToast = (message) => {
  Toastify({
    text: message,
    backgroundColor: '#03CE75',
    className: 'info',
  }).showToast();
};

const httpRequest = async (method, url, data = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return { response };
  } catch (error) {
    const errorMessage = (error.response) ? error.response.data.message.error || error.response.data.message : 'Failed Try again later';
    errorToast(errorMessage);
    return { error };
  }
};

export { httpRequest, errorToast, successToast };
