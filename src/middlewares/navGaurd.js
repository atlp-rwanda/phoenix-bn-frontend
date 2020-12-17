import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
export default function navGaurd({ component: Component, allowedRoles, ...rest }) {
    const { loggedIn, userData } = useSelector(store => store.user);
    const isAuthenticated = () => {
        if (loggedIn === true) {
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
