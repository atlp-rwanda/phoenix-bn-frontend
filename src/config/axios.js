import axios from 'axios';

export default function axiosConfig() {
  axios.defaults.baseURL = process.env.API_URL;
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        config.headers.authorization = token;
      }
      return config;
    },
  );

  axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
      if (error.response && error.response.data.message === 'jwt expired') {
        localStorage.removeItem('token');
        return window.location.href = '/';
      }
      return Promise.reject(error);
    },
  );
}
