import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import landingPage from './pages/LandingPage';
import helpPage from './pages/Help';
import store from './store';
import Footer from './components/common/Footer';
import aboutPage from './pages/About';

const App = () => (
  <Router>
    <>
      <Provider store={store}>
        <Route exact path="/" component={landingPage} />
        <Route exact path="/help" component={helpPage} />
        <Route exact path="/about" component={aboutPage} />
        <Footer />
      </Provider>
    </>
  </Router>
);

export default App;
