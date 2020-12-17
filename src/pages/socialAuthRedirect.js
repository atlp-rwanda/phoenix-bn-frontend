import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/common/TopNav';
import Footer from '../components/common/Footer';
import { httpRequest } from '../helpers/httpRequest';
import { logUserIn } from '../actions/auth.js';

const socialAuth = (props) => {
  const params = useParams();
  const { action } = params;
  useEffect(async () => {
    if (params.token) {
      const { response } = await httpRequest('get', `users/me/${atob(params.token)}`, {});
      if (response) {
        const UserInfo = response.data.data;
        logUserIn(UserInfo);
        localStorage.setItem('userInfo', JSON.stringify(response.data.data));
        props.history.push('/dashboard');
      }
    }
  });
  return (
    <div>
      <div className="w-screen overflow-hidden">
        <Navigation />
        <div className="main p-4 py-36">
          <div className="mx-auto w-full text-center">
            {action == 'verification' ? <p className="text-red-500">Your Account has been verified before</p> : <p className="text-red-500">Authentication failed</p>}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default socialAuth;
