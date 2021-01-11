import React, { Component, Fragment, useState } from 'react';
import {connect} from 'react-redux';
import isValid from '../../helpers/isValid';
import validate from '../../helpers/formValidator';
import { httpRequest, successToast,errorToast } from '../../helpers/httpRequest';
import TextInput from './TextInput';
import { withRouter} from 'react-router-dom'

export class editLocation extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        loading: false,
        location: {
            id:this.props.location.id,
            name:this.props.location.name
        },
        formErrors: {},
        showModal:false
    }
    updateTodo = async () =>{
        const validations = validate('editlocationform', ['name']);
        if (validations.size > 0) {
            return this.setState({ formErrors: validations.errors });
        }
        this.setState({ formErrors: {} });
        try {
            const { error, response } = await httpRequest('put', `/locations/update/${this.state.location.id}`, {name:this.state.location.name},{'Authorization': this.props.auth.authToken});
            if (error) {
                errorToast(error.message);
            } else {
                successToast(response.data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    handleInput = (e)=> {
        const prop = e.target
        this.setState({ location: { ...this.state.location, [prop.name]: e.target.value } })
    }
    render(){
        return <Fragment>
            <button
                className="bg-mainGreen rounded-sm text-sm hover:opacity-75 text-white w-full py-2 px-3 mt-3 outline-none"
                type="button"
                data-toggle="modal" 
                data-target={`#id${this.state.location.id}`}
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setState({showModal:true})}
            >
                Edit
            </button>
            {this.state.showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Edit Location
                        </h3>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => this.setState({showModal:false})}>&times;</button>
                        </div>
                        {/*body*/}
                        <form name="editlocationform">
                            <div className="relative p-6 flex-auto">
                            <TextInput error={this.state.formErrors.name} rules={isValid({ required: true })} id='name' label='Location Name' name='name' type='text' value={this.state.location.name} onInput={this.handleInput} />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => this.setState({showModal:false})}
                            >Close</button>
                            <button
                                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="submit"
                                style={{ transition: "all .15s ease" }}
                                onClick={this.updateTodo}
                            >Save</button>
                        </div>
                        </form>                        
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </Fragment>
    }
}
const mapStateToProps = state => {
    return { auth:state.auth.userData}
}
export default connect(mapStateToProps)(editLocation);

    