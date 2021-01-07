import { LOGINSUCESS } from '../actions/actionTypes.js';
import { authenticatedUser } from '../actions/auth.js';

const LoadFromLocalStorage = () => new Promise((resolve, reject) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    authenticatedUser(JSON.parse(userInfo),LOGINSUCESS);
    return resolve();
  }
  return resolve();
});
export default LoadFromLocalStorage;