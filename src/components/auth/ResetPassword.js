import React, { Component } from 'react';
import TextInput from '../form/TextInput';
import {httpRequest,successToast} from '../../helpers/httpRequest';

export class ResetPassword extends Component {
  state={
    email:'',
    loading:false
  }

 inputEmail=(e)=>{
  this.setState({ ...this.state.email,email: e.target.value });
 }
 resetPassword=async (e)=>{
  e.preventDefault();
const {error,response}=await httpRequest('post','/users/forgot-password',this.state)
if (error) {
  this.setState({ loading: false });
} else {
  successToast(response.data.message);
  this.setState({
    email: ''
  });
  this.setState({ loading: false });
}
 }
  render() {
    return (
      <div>
        <div className="bg-white py-14 px-6 w-full md:w-2/6 my-14  mx-auto space-y-5">
          <p className="text-formColor font-Sansation text-center">PASSWORD REMINDER</p>
          <div className="w-full">
            <h1 className="text-left font-Sansation">Your email address:</h1>

            <form name="resetPwdForm" className="w-full space-y-4" onSubmit={this.resetPassword}>
              <TextInput type="email" name="email" value={this.state.email} onInput={this.inputEmail} />
              <button type="submit" id="submitButton" className="bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none">Reset</button>
            </form>
            <div>
              <p id="paragraph" className="text-gray-700 text-center mt-4">
                Don't Have Account?
                <a to="/login"><u>Sign Up</u></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
