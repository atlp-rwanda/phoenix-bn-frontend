import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './pages/LandingPage';
import { Provider } from 'react-redux'
import store from './store'
const App = () => {
    return (
        <Router>
            <Fragment>
                <Provider store={store}>
                <Route exact path='/' component={landingPage} />
                </Provider>
            </Fragment>
        </Router>
    )
}

export default App;