import React, { Component } from 'react'
import TextInput from '../form/TextInput'
import GoogleIcon from '../icon/googleIcon'
import Facebook from '../icon/facebook'
import { Link } from 'react-router-dom'
import { httpRequest, successToast } from '../../helpers/httpRequest'

export class signup extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            userData: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                comfirmPassword: ''
            }
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
            const { error, response } = await httpRequest('post', '/users/signup', this.state.userData);
            if (error) {
                return this.setState({ loading: false })
            } else {
                successToast(response.data.message)
               return this.setState({ loading: false })
                
            }
        }
        return (
            <div className='bg-white py-7 px-6 w-2/6 mx-auto space-y-5'>
                <p className='text-formColor font-bold'>CREATE ACCOUNT</p>
                <div className='w-full'>
                    <form className='w-full space-y-2' onSubmit={handleSubmit}>
                        <TextInput label='First name' name='firstName' type='text' value={this.state.userData.firstName} onInput={this.handleInput} />
                        <TextInput label='Last name' name='lastName' type='text' value={this.state.userData.lastName} onInput={this.handleInput} />
                        <TextInput label='Email' name='email' type='email' value={this.state.userData.email} onInput={this.handleInput} />
                        <TextInput label='Password' name='password' type='password' value={this.state.userData.password} onInput={this.handleInput} />
                        <TextInput label='Confirm Password' name='confirmPassword' type='password' value={this.state.userData.confirmPassword} onInput={this.handleInput} />
                        <button disabled={this.state.loading} className='bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none'>{this.state.loading == false ? 'Join Now ' : 'Joinig ...'}</button>
                    </form>
                    <div className='w-full text-center mt-1 text-gray-800'> - Or -</div>
                    <div className='flex space-x-3 justify-center'>
                        <GoogleIcon />
                        <Facebook />
                    </div>
                    <div>
                        <p className='text-gray-700 text-center mt-1'>Already on barefoot? <Link to='/login'><u>Login</u></Link></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default signup
