/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNavigation from '../components/common/TopNav';
import Accomodations from '../components/accomodations';

export class accomodations extends Component {
  render() {
    return (
      <div className="w-screen overflow-hidden">
        <div className="w-screen">
          <div className="w-full float-right fixed right-0 z-10">
            <TopNavigation />
          </div>
          <main className="mt-14 p-4 absolute w-full left-0 max-h-screen text-gray-700">
            <Accomodations />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ userInfo: state.auth.userData });
export default connect(mapStateToProps)(accomodations);
