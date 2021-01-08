import React, { Component } from 'react';
import TextInput from '../form/TextInput';
import {httpRequest,successToast} from '../../helpers/httpRequest';
import {withRouter,useParams} from 'react-router-dom';
export class newPassword extends Component {
  state={
loading:false,
newPassword:{
    password:'',
    confirmPassword:''
}
  }

  handleInput=(e)=> {
    const prop = e.target;
    this.setState({ newPassword: { ...this.state.newPassword, [prop.name]: e.target.value } });
  }
 handleSubmit=async(e)=>{
     e.preventDefault();
const token=atob(this.props.match.params.token);
const {error,response} =await httpRequest('put',`/users/reset-password/${token}`,this.state.newPassword);
if (error) {
    this.setState({ loading: false });
  } else {
    successToast(response.data.message);
    this.setState({
      newPassword: {
        password: '',
        confirmPassword: '',
      },
    });
    this.setState({ loading: false });
    this.props.history.push('/');
  }

}
  render() {
    return (
      <div>
        <div className="bg-white py-14 px-6 w-full md:w-2/6 my-14  mx-auto space-y-5">
          <p className="text-formColor font-Sansation text-center">YOUR NEW PASSWORD</p>
          <div className="w-full">
            <form name="resetPwdForm" className="w-full space-y-4" onSubmit={this.handleSubmit}>
              <TextInput type="password" label='New password' name="password" value={this.state.newPassword.password} onInput={this.handleInput} />
              <TextInput type="password" label='Confirm Password' name="confirmPassword" value={this.state.newPassword.confirmPassword} onInput={this.handleInput} />
              <button type="submit" id="submitButton" className="bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none">Reset</button>
            </form>
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(newPassword);
