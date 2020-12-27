import React, { Component } from 'react'
import TextInput from '../form/TextInput'
import GoogleIcon from '../icon/googleIcon'
import Facebook from '../icon/facebook'
import { Link, Redirect ,withRouter} from 'react-router-dom'
import { httpRequest, successToast } from '../../helpers/httpRequest'
import { LOGIN } from '../../actions/actionTypes'
import {connect} from 'react-redux'

export class signin extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            userData: {
                email: '',
                password: ''}
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(evt) {
        const prop = evt.target
        this.setState({ userData: { ...this.state.userData, [prop.name]: evt.target.value } })
    }
    render() {
        const handleSubmit = async (evt) => {
            evt.preventDefault();
            this.setState({ loading: true })
            const { error, response } = await httpRequest('post', '/users/login', this.state.userData);
            if (error) {
                return this.setState({ loading: false })
            } else {
                successToast(response.data.message);
                const UserInfo = response.data.data.displayData;
                this.props.dispatch({type:LOGIN,payload:UserInfo});
                localStorage.setItem('userInfo',JSON.stringify(UserInfo));
                this.props.history.push('/dashboard');
                
            }
        }
        return (
            <div className='bg-white py-7 px-6 w-2/6 mx-auto space-y-5'>
                <p className='text-formColor font-bold'>Login</p>
                <div className='w-full'>
                    <form className='w-full space-y-2' onSubmit={handleSubmit}>
                        <TextInput label='Email' name='email' type='email' value={this.state.userData.email} onInput={this.handleInput} />
                        <TextInput label='Password' name='password' type='password' value={this.state.userData.password} onInput={this.handleInput} />
                        <button disabled={this.state.loading} className='bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none'>{this.state.loading == false ? 'Login ' : 'Login ...'}</button>
                    </form>
                    <div className='w-full text-center mt-1 text-gray-800'> - Or -</div>
                    <div className='flex space-x-3 justify-center'>
                        <GoogleIcon />
                        <Facebook />
                    </div>
                    <div>
                        <p className='text-gray-700 text-center mt-1'>Don't Have Account? <Link to='/signup'><u>Sign Up</u></Link></p>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { user: state.user }
  }
  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(signin));