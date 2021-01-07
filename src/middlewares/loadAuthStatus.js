import { registerUser } from '../actions/auth.js';

const LoadFromLocalStorage = () => new Promise((resolve, reject) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    registerUser(JSON.parse(userInfo));
    return resolve();
  }
  return resolve();
});
export default LoadFromLocalStorage;
