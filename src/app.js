import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import landingPage from './pages/LandingPage';
import socialAuth from './pages/socialAuthRedirect'
import helpPage from './pages/Help';
import { Provider } from 'react-redux'
import store from './store'
import aboutPage from './pages/About';
import signinPage from './pages/signin';
import ProtectedRoute from './middlewares/navGaurd'
import Dashboard from './pages/DashBoard';
const App = () => {
    return (
        <Router>
            <Fragment>
                <Provider store={store}>
                    <Switch>
                        <Route exact path='/' component={landingPage} />
                        <Route exact path='/help' component={helpPage} />
                        <Route exact path='/about' component={aboutPage} />
                        <Route exact path='/login' component={signinPage} />
                        <Route exact path='/socialAuth/failed' component={socialAuth}/>
                        <Route exact path='/socialAuth/success/:token' component={socialAuth}/>
                        <ProtectedRoute allowedRoles={[1,2,3,4,5]}  path='/dashboard' component={Dashboard} />
                    </Switch>
                </Provider>
            </Fragment>
        </Router>
    )
}

export default App;