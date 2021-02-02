import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SHOW_PROFILE_UPDATE_PAGE } from '../actions/actionTypes'
import { getUsersProfile } from '../actions/user'

export class Profile extends Component {
  toggleProfile = () => {
    this.props.dispatch({ type: SHOW_PROFILE_UPDATE_PAGE })
  };
  async componentDidMount() {
    await getUsersProfile(this.props.userInfo.userData.id);
  }

  render() {
    const rowClass = 'flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none';
    const leftClass = 'w-full sm:w-1/3 font-medium text-center sm:text-left font-normal text-gray-600 text-sm';
    const rightClass = 'flex-1 text-center sm:text-left font-normal text-gray-600 text-sm';


    return (

      <div className=" flex justify-center mt-16 ">
        <div className="rounded overflow-hidden shadow-lg my-2 w-full md:w-5/12  bg-white ">
          <div className="flex justify-center mt-5">
            <img className=" w-44 h-44 rounded-full " src={this.props.profile.profilePicture} alt="Sunset in the mountains " />
          </div>
          <div className="px-6 py-4 w-full">
            <div className="w-full">
              <h3 className="font-normal text-center text-gray-600 text-xl">User Details</h3>
              <div className="mt-4">
                <div className={rowClass}>
                  <span className={leftClass}>First name</span>
                  <span className={rightClass}>{this.props.profile.firstName}</span>
                </div>
                <div className={rowClass}>
                  <span className={leftClass}>Last name</span>
                  <span className={rightClass}>{this.props.profile.lastName}</span>
                </div>
                <div className={rowClass}>
                  <span className={leftClass}>Email</span>
                  <span className={rightClass}>{this.props.profile.email}</span>
                </div>
                <div className={rowClass}>
                  <span className={leftClass}>Preferred Language</span>
                  <span className={rightClass}>{this.props.profile.preferedLanguage}</span>
                </div>
                <div className={rowClass}>
                  <span className={leftClass}>Office Address</span>
                  <span className={rightClass}>{this.props.profile.officeAddres}</span>
                </div>

                <div className="flex justify-center">

                  <button onClick={this.toggleProfile} className="bg-white hover:bg-gray-100  py-1 w-full border border-gray-400 rounded shadow font-normal text-gray-600 text-sm">

                    Change Profile
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}
//console.log(this.props.profile.profilePicture)

const mapStateToProps = (state) => ({ userInfo: state.auth, profile: state.userProfile });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
