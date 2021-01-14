import { LOGIN_SUCCESS } from '../actions/actionTypes.js';
import { authenticatedUser } from '../actions/auth.js';
import { httpRequest } from '../helpers/httpRequest';

const LoadFromLocalStorage = () => new Promise(async (resolve, reject) => {
  const token = localStorage.getItem('token');
  if (token) {
    // authenticatedUser(JSON.parse(userInfo),LOGIN_SUCCESS);
    const { response } = await httpRequest('get', `users/me/${token}`, {});
    if (response) {
      const UserInfo = response.data;
      await authenticatedUser(UserInfo, LOGIN_SUCCESS);
      return resolve();
    }
    return resolve();
  }
  return resolve();
});
export default LoadFromLocalStorage;
