import React, { Component } from 'react';
import Navigation from '../components/common/TopNav';
import SignupComponent from '../components/auth/signup';

export class signup extends Component {
  render() {
    return (
      <div className="w-screen overflow-hidden">
        <Navigation />
        <div className="main py-20">
          <SignupComponent />
        </div>
      </div>
    );
  }
}

export default signup;
