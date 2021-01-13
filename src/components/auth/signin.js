import React, { Component } from 'react'
import TextInput from '../form/TextInput'
import GoogleIcon from '../icon/googleIcon'
import Facebook from '../icon/facebook'
import { Link, Redirect ,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import isValid from '../../helpers/isValid';
import validate from '../../helpers/formValidator';
import {login} from '../../actions/auth'
import PropTypes from 'prop-types'

export class Signin extends Component {
        state={
            loading: false,
            userData: {
                email: '',
                password: ''
            },
            formErrors: {},
        }
        static propTypes = {
            login: PropTypes.func.isRequired,
            isAuthenticated: PropTypes.bool,
          };
    handleInput = (e)=> {
        const prop = e.target
        this.setState({ userData: { ...this.state.userData, [prop.name]: e.target.value } })
    }
    onSubmit =  (e) => {
        e.preventDefault();

        const validations = validate('signinForm', ['email', 'password']);
        if (validations.size > 0) {
            return this.setState({ formErrors: validations.errors });
        }
        this.setState({ formErrors: {} });
        this.setState({ loading: true }) 
        const {email,password}=this.state.userData;
        this.props.login({email,password})
 
    }
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
          }
        return (
            <div className='bg-white py-7 px-6 w-full md:w-2/6 my-10  mx-auto space-y-5'>
                <p className='text-formColor font-bold'>Login</p>
                <div className='w-full'>
                    <form name='signinForm' className='w-full space-y-2' onSubmit={this.onSubmit}>
                        <TextInput error={this.state.formErrors.email} rules={isValid({ required: true, email: true })} id='email' label='Email' name='email' type='email' value={this.state.userData.email} onInput={this.handleInput} />
                        <TextInput error={this.state.formErrors.password} rules={isValid({ required: true, minLength: 6 })} id='Password' label='Password' name='password' type='password' value={this.state.userData.password} onInput={this.handleInput} />
                        <button id='submitButton' disabled={this.state.loading} className='bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none'>{this.state.loading == false ? 'Login ' : 'Login ...'}</button>
                    </form>
                    <div className='w-full text-center mt-1 text-gray-800'> - Or -</div>
                    <div className='flex space-x-3 justify-center'>
                        <GoogleIcon />
                        <Facebook />
                    </div>
                    <div>
                    <p id="paragraph" className="text-gray-700 text-center mt-1">
                        Don't Have Account?  
                        <Link to="signup"> Sign Up</Link>
                    </p>
                    <p id="paragraph" className="text-gray-700 text-center mt-1">
                       Forgot your password?  
                     <Link to="/reset"> Reset password</Link>
                    </p>
                   
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state=>({
    isAuthenticated:state.auth.isAuthenticated
  })
  export default connect(mapStateToProps,{login})(Signin);
  