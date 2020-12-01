import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './components/landingPage';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Route exact path='/' component={landingPage} />
            </Fragment>
        </Router>
    )
}

export default App;