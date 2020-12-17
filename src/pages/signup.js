import React, { Component } from 'react';
import Navigation from '../components/common/TopNav';
import SignupComponent from '../components/auth/signup';
import Footer from '../components/common/Footer';

export class signup extends Component {
  render() {
    return (
      <div className="w-screen overflow-hidden">
        <Navigation />
        <div className="main p-4">
          <SignupComponent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default signup;
