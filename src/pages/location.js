import React, { Component } from 'react'
import TopNav from '../components/common/AuthTopNav';
import isValid from '../helpers/isValid';
import validate from '../helpers/formValidator';
import { httpRequest, successToast } from '../helpers/httpRequest'
import TextInput from '../components/form/TextInput'

export default class location extends Component {
        state = {
            loading: false,
            locationData: {
                name:''
            },
            formErrors: {},
        }   
    
    handleInput = (e)=> {
        console.log("Here ")
        const prop = e.target
        this.setState({ locationData: { ...this.state.locationData, [prop.name]: e.target.value } })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const validations = validate('locationForm', ['locationname']);
        if (validations.size > 0) {
            return this.setState({ formErrors: validations.errors });
        }
        this.setState({ formErrors: {} });
        this.setState({ loading: true })
        const { error, response } = await httpRequest('post', '/locations', this.state.locationData);
        if (error) {
            return this.setState({ loading: false })
        } else {
            successToast(response.data.message);            
        }
    }
    render() {
        return (
            <div>
                <TopNav />
                <div className='bg-white py-7 px-6 w-full md:w-2/6 my-10  mx-auto space-y-5'>
                    <div className='w-full'>
                        <form name='locationForm' className='w-full space-y-2' onSubmit={this.onSubmit}>
                            <TextInput error={this.state.formErrors.name} rules={isValid({ required: true })} id='locationname' label='Location Name' name='locationname' type='text' value={this.state.locationData.name} onInput={this.handleInput} />
                            <button id='submitButton' disabled={this.state.loading} className='bg-mainGreen rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none'>{this.state.loading == false ? 'Submit ' : 'Submitting ...'}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}