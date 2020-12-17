import { logUserIn } from '../actions/auth.js';

const LoadFromLocalStorage = () => new Promise((resolve, reject) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    logUserIn(userInfo);
    return resolve();
  }
  return resolve();
});
export default LoadFromLocalStorage;
