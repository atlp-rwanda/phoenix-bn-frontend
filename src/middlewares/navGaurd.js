import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
export default function navGaurd({ component: Component, allowedRoles, ...rest }) {
    const { isLoggedIn, userData } = useSelector(store => store.auth);
    const isAuthenticated = () => {
        if (isLoggedIn === true) {
            const { RoleId } = userData;
            if (allowedRoles.indexOf(RoleId) < 0) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }
    return (<Route {...rest} render={(props) => {
        return (
            isAuthenticated() === true
                ? <Component {...props} />
                : <Redirect to='/signup' />
        );
    }} />)
}
