import React, { Component } from 'react'
import isValid from '../../helpers/isValid';
import validate from '../../helpers/formValidator';
import { httpRequest, successToast } from '../../helpers/httpRequest';
import TextInput from './TextInput';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom'

export class createlocation extends Component {
        state = {
            loading: false,
            locationData: {
                name:''
            },
            formErrors: {},
        }   
    
    handleInput = (e)=> {
        const prop = e.target
        this.setState({ locationData: { ...this.state.locationData, [prop.name]: e.target.value } })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const validations = validate('locationForm', ['name']);
        if (validations.size > 0) {
            return this.setState({ formErrors: validations.errors });
        }
        this.setState({ formErrors: {} });
        this.setState({ loading: true })
        const { error, response } = await httpRequest('post', '/locations', this.state.locationData,{'Authorization': this.props.auth.authToken});
        if (error) {
            return this.setState({ loading: false })
        } else {
            successToast(response.data.message);
            this.setState({
                locationData: {
                    name:''
                },
              });
            window.location='/location'; 
            return this.setState({ loading: false })          
        }
    }
    render() {
        return (
            <div>
                <fieldset className="border-2 border-black">
                <legend className="p-2">add Location</legend>
                <div className='bg-white'>
                    <div className='w-full'>
                        <form name='locationForm' className='w-full space-y-2 p-3' onSubmit={this.onSubmit}>
                            <TextInput error={this.state.formErrors.name} rules={isValid({ required: true })} id='name' label='Location Name' name='name' type='text' value={this.state.locationData.name} onInput={this.handleInput} />
                            <button id='submitButton' disabled={this.state.loading} className='bg-mainGreen hover:opacity-75 rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none'>{this.state.loading == false ? 'Submit ' : 'Submitting ...'}</button>
                        </form>
                    </div>
                </div>
                </fieldset>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { auth:state.auth.userData}
  }
export default connect(mapStateToProps)(withRouter(createlocation));