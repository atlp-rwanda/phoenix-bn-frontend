import axios from 'axios';

export default function axiosConfig() {
  axios.defaults.baseURL = process.env.API_URL;
  axios.interceptors.request.use(
    (config) => {
      if (localStorage.getItem('userInfo')) {
        const data = JSON.parse(localStorage.getItem('userInfo'));
        config.headers.authorization = data.authToken;
      }
      return config;
    },
  );
}
