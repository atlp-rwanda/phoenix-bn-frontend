import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../form/TextInput';
import { forgotPassword } from '../../actions/reset';

export class ResetPassword extends Component {
  state={
    email:''
  }

    onSubmit=(e)=>{
  e.preventDefault();
 forgotPassword(this.state)
    }

  handleInput=(e)=>{
    this.setState({ ...this.state.email, email:e.target.value});
  }

  render() {
    return (
      <div className="bg-white py-14 px-6 w-full md:w-2/6 my-14  mx-auto space-y-5">
        <p className="text-formColor font-Sansation text-center">PASSWORD REMINDER</p>
        <div className="w-full">
          <h1 className="text-left font-Sansation">Your email address:</h1>
          <form name="resetPwdForm" className="w-full space-y-4" onSubmit={this.onSubmit}>
            <TextInput type="email" onInput={this.handleInput} value={this.state.email} />
            <button type="submit" id="submitButton" className="bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none">Reset</button>
          </form>
          <div>
          
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ user: state.auth.userData });

export default connect(mapStateToProps, { forgotPassword })(ResetPassword);
