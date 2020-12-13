import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import landingPage from './pages/LandingPage';
import helpPage from './pages/Help';
import { Provider } from 'react-redux'
import store from './store'
import Footer from './components/common/Footer';
import aboutPage from './pages/About';
const App = () => {
    return (
        <Router>
            <Fragment>
                <Provider store={store}>
                <Route exact path='/' component={landingPage} />
                <Route exact path='/help' component={helpPage} />
                <Route exact path='/about' component={aboutPage} />
                <Footer />
                </Provider>
            </Fragment>
        </Router>
    )
}

export default App;