import React, { Component } from 'react';
import ResetPwdComponent from '../components/auth/ResetPassword';
import Navigation from '../components/common/TopNav';
import Footer from '../components/common/Footer';

export class ResetP extends Component {
  render() {
    return (
      <div className="w-screen overflow-hidden">
        <Navigation />
        <div className="main p-4" />
        <ResetPwdComponent />
        <Footer />
      </div>
    );
  }
}

export default ResetP;
