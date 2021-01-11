import React, { Component, Fragment, useEffect, useState } from 'react';
import Editlocation from './editlocation';
import { httpRequest, successToast,errorToast } from '../../helpers/httpRequest';
import {connect} from 'react-redux';
import { Link, Redirect ,withRouter} from 'react-router-dom'

export class listLocation extends Component{
    state = {
        loading: false,
        location: [],
    } 
    deletelocation = async (id) => {
        try {
            const {error,response} = await httpRequest('delete', `/locations/${id}`,'',{'Authorization': this.props.auth.authToken});
            if(error){
                errorToast(error.message);
            }
            else{
                successToast(response.data.message);
                this.setState(this.state.location.filter(location => location.id !== id))
                 window.location = "/location";
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    getLocations = async () => {
        const { error, response } = await httpRequest('get', '/locations','',{'Authorization': this.props.auth.authToken});
        if (error) {
            errorToast(error.message);
        } else {
            successToast(response.data.message);
            this.setState({location:response.data.data});   
        }
    }
    componentDidMount() {
        this.getLocations();
    }
    render(){
        return(
            <div className=" bg-white">
                <fieldset className="border-2 border-black">
                <legend className="p-2">List of Locations</legend>
                <table className=" w-full text-black">
                    <thead>
                        <tr>
                            <th className="w-1/4 text-formColor">Name</th>
                            <th className="w-1/12 text-formColor">Edit</th>
                            <th className="w-1/12 text-formColor">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.location.map(loc => {
                            return (
                                <tr key={loc.id}>
                                    <td className="text-black text-center ">{loc.name}</td>
                                    <td><Editlocation location={loc}/></td> 
                                    <td><button className="bg-red-600 hover:opacity-75 rounded-sm text-sm text-white w-full py-2 px-3 mt-3 outline-none" onClick={() => this.deletelocation(loc.id)}>Delete</button></td>
                                </tr>
                            )
                            })
                        }  
                    </tbody>
                </table>
                </fieldset>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { auth:state.auth.userData}
  }
export default connect(mapStateToProps) (withRouter(listLocation));