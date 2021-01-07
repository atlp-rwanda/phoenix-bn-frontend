import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextInput from '../form/TextInput';
import GoogleIcon from '../icon/googleIcon';
import Facebook from '../icon/facebook';
import { httpRequest, successToast } from '../../helpers/httpRequest';
import isValid from '../../helpers/isValid';
import validate from '../../helpers/formValidator';
import { authenticatedUser } from '../../actions/auth.js'
import { Link } from 'react-router-dom';

export class signup extends Component {
    state = {
      loading: false,
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      formErrors: {},
    };

  handleInput=(e)=> {
    const prop = e.target;
    this.setState({ userData: { ...this.state.userData, [prop.name]: e.target.value } });
  }
  onSubmit = async (e) => {
    e.preventDefault();
    const validations = validate('signupForm', ['firstName', 'lastName', 'email', 'password', 'confirmPassword']);
    if (validations.size > 0) {
      return this.setState({ formErrors: validations.errors });
    }
    this.setState({ formErrors: {} });
    this.setState({ loading: true });
    const { error, response } = await httpRequest('post', '/users/signup', this.state.userData);
    if (error) {
      this.setState({ loading: false });
    } else {
      successToast(response.data.message);
      this.setState({
        userData: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      });
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="bg-white py-7 px-6 w-full md:w-2/6 mx-auto space-y-5">
        <p className="text-formColor font-bold">CREATE ACCOUNT</p>
        <div className="w-full">
          <form name="signupForm" className="w-full space-y-2" onSubmit={this.onSubmit}>
            <TextInput id='firstName' error={this.state.formErrors.firstName} rules={isValid({ required: true })} label="First name" name="firstName" type="text" value={this.state.userData.firstName} onInput={this.handleInput} />
            <TextInput id='lastName' error={this.state.formErrors.lastName} rules={isValid({ required: true })}  label="Last name" name="lastName" type="text" value={this.state.userData.lastName} onInput={this.handleInput} />
            <TextInput id='email' error={this.state.formErrors.email} rules={isValid({ required: true, email: true })}  label="Email" name="email" type="email" value={this.state.userData.email} onInput={this.handleInput} />
            <TextInput id='Password' error={this.state.formErrors.password} rules={isValid({ required: true, minLength: 6 })}  label="Password" name="password" type="password" value={this.state.userData.password} onInput={this.handleInput} />
            <TextInput id='confirmPassword' error={this.state.formErrors.confirmPassword} rules={isValid({ required: true, minLength: 6 })}  label="Confirm Password" name="confirmPassword" type="password" value={this.state.userData.confirmPassword} onInput={this.handleInput} />
            <button id="submitButton" disabled={this.state.loading} className="bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none">{this.state.loading == false ? 'Join Now ' : 'Joinig ...'}</button>
          </form>
          <div className="w-full text-center mt-1 text-gray-800"> - Or -</div>
          <div className="flex space-x-3 justify-center">
            <GoogleIcon />
            <Facebook />
          </div>
          <div>
            <p id="paragraph" className="text-gray-700 text-center mt-1">
              Already on barefoot?
              <Link to="/login"><u>Login</u></Link>
            </p>
          </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = state=>({
  isLoggedIn:state.isLoggedIn
})
export default connect(mapStateToProps,{authenticatedUser})(signup);
