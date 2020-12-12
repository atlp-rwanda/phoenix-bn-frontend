import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './pages/LandingPage';
import { Provider } from 'react-redux'
import store from './store'
import Footer from './components/common/Footer';
const App = () => {
    return (
        <Router>
            <Fragment>
                <Provider store={store}>
                <Route exact path='/' component={landingPage} />
                <Footer />
                </Provider>
            </Fragment>
        </Router>
    )
}

export default App;