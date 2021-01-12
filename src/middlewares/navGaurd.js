import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function navGaurd({ component: Component, allowedRoles, ...rest }) {
  const { isAuthenticated, userData } = useSelector((store) => store.auth);
  const isAuthenticate = () => {
    if (isAuthenticated === true) {
      const { RoleId } = userData;
      if (allowedRoles.indexOf(RoleId) < 0) {
        return false;
      }
      return true;
    }
    return false;
  };
  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticate() === true
          ? <Component {...props} />
          : <Redirect to="/signup" />
      )}
    />
  );
}