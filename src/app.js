import React, { Fragment } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import landingPage from './pages/LandingPage';
import socialAuth from './pages/socialAuthRedirect';
import helpPage from './pages/Help';
import store from './store';
import aboutPage from './pages/About';
import signupPage from './pages/signup';
import signinPage from './pages/signin';
import CreateAccommodationPage from './pages/CreateAccommodation';
import ProtectedRoute from './middlewares/navGaurd';
import Dashboard from './pages/DashBoard';

const App = () => (
  <Router>
    <>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/help" component={helpPage} />
          <Route exact path="/about" component={aboutPage} />
          <Route exact path="/signup" component={signupPage} />
          <Route exact path="/accommodation" component={CreateAccommodationPage } />
          <Route exact path='/login' component={signinPage} />
          <Route exact path="/socialAuth/failed/:action" component={socialAuth} />
          <Route exact path="/socialAuth/success/:token" component={socialAuth} />
          <ProtectedRoute allowedRoles={[1, 2, 3, 4, 5]} path="/dashboard" component={Dashboard} />
        </Switch>
      </Provider>
    </>
  </Router>
);

export default App;