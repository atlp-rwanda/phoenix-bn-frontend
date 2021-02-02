import React, { Component } from 'react';
import Navigation from '../components/common/TopNav';
import CreateAccommodationComponent from '../components/accommodation/createAccommodation';
import Footer from '../components/common/Footer'

export class createAccommodation extends Component {
  render() {
    return (
      <div className="w-screen overflow-hidden">
        <Navigation />
        <div className="main pt-24 pb-11">
          <CreateAccommodationComponent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default createAccommodation;
