import React, { Component } from 'react';
import Navigation from '../components/common/TopNav';
import NewPwdComponent from '../components/auth/NewPwd';
import Footer from '../components/common/Footer';

export class newpwd extends Component {
  render() {
    return (
      <div className="w-screen overflow-hidden">
        <Navigation />
        <div className="main p-4" />
        <NewPwdComponent />
        <Footer />
      </div>
    );
  }
}

export default newpwd;
