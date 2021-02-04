import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/common/TopNav';
import Footer from '../components/common/Footer';
import ProfileComponent from '../components/Profile';
import EditProfile from '../components/editProfile';

export class signup extends Component {
  render() {
    return (
      <div className="w-screen overflow-hidden">
        <Navigation />
        <div className="main pt-20 pb-11">
          {this.props.showProfile ? <ProfileComponent /> : <EditProfile />}

        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ showProfile: state.config.showProfile });

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(signup);
