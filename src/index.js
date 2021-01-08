
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './app';
import './styles/main.css';
import 'toastify-js/src/toastify.css';
import axiosConfig from './config/axios';
import loadAuthStatus from './middlewares/loadAuthStatus';

axiosConfig();
loadAuthStatus().then(() => {
  ReactDOM.render(<Landing />, document.getElementById('app'));
});
