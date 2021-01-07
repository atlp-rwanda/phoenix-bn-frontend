import React, { Component } from 'react';
import { httpRequest,successToast } from '../helpers/httpRequest'
export class allUsers extends Component {
    state = {
        users: '',
        loading: true,
        modalVisible: false,
        lineManagers: [],
        lineManagerId: "",
        userId: ""
    }
    async componentDidMount() {
        this.getAllUsers();
    }
    getAllUsers =async ()=>{
        const { response } = await httpRequest('get', '/users');
        if (response) {
            this.setState({ ...this.state.users, users: response.data.data, loading: false })
        }
    }
    ShowPopup = async (e) => {
        const userId = e.target.value;
        alert(userId);
        this.setState({ ...this.state, modalVisible: true,userId:userId })
        const { response } = await httpRequest('get', '/users/lineManagers');
        if (response) {
            this.setState({ ...this.state.lineManagers, lineManagers: response.data.data })
        }
    }
    closePopup = () => {
        this.setState({ modalVisible: false })
    }
    assignUsers = async () => {
        const {lineManagerId,userId} = this.state
        const { response } = await httpRequest('put','/users/manager/assign',{lineManagerId,userId});
        if(response){
            await this.getAllUsers();
            this.setState({ ...this.state.modalVisible, modalVisible: false })
            successToast(response.data.message)
        }
    }
    handleInput = (e) => {
        const lineManagerId = e.target.value
        this.setState({ ...this.state, lineManagerId: lineManagerId })
    }

    render() {
        return (
            <div className='w-full'>
                <div className="w-8/12 p-1 mx-auto space-y-2">
                    <div className="w-full bg-gray-50">
                        <div className="p-2">
                            <h4>List Of All Users</h4>
                        </div>
                    </div>
                    <div id="table" className="p-1">
                        <table className="w-full border p-1" cellPadding='5'>
                            <thead className='bg-formColor border text-gray-100'>
                                <tr className='border'>
                                    <th className='border'>First Name</th>
                                    <th className='border'>Last Name</th>
                                    <th className='border'>Email</th>
                                    <th className='border'>Address</th>
                                    <th className='border'>Line Manager</th>
                                </tr>
                            </thead>
                            {this.state.loading === false ?
                                <tbody>
                                    {this.state.users.map(userInfo => {
                                        const { lineManagerInfo } = userInfo
                                        return <tr className='border' key={userInfo.id}>
                                            <td className='border'>{userInfo.firstName}</td>
                                            <td className='border'>{userInfo.lastName}</td>
                                            <td className='border'>{userInfo.email}</td>
                                            <td className='border'>{userInfo.officeAddres}</td>
                                            <td className='border'>{lineManagerInfo == null ? <button value={userInfo.id} className='text-xs bg-red-500 outline-none p-1 text-gray-100 rounded-sm' onClick={this.ShowPopup}>Assign to Manager</button> : lineManagerInfo['firstName'] + ' ' + lineManagerInfo['lastName']}</td>
                                        </tr>
                                    })}
                                </tbody> : <tbody></tbody>}

                        </table>
                    </div>


                </div>
                {this.state.modalVisible === true ? <div className='w-screen h-screen fixed left-0 top-0 pt-40 bg-overLayer'>
                    <div className='w-full md:w-4/12 lg:w-4/12 p-4 bg-gray-50 mx-auto rounded space-y-1'>
                        <div className='w-full p-2 space-y-1'>
                            <div className='w-full relative'>
                                <span className='text-red-500 absolute right-0 cursor-pointer' onClick={this.closePopup}>x</span>
                            </div>
                            <p className='text-gray-700'>Select Line Manager</p>
                        </div>
                        <div className='w-full space-y-2'>
                            <select className='w-full p-2 bg-white' onChange={this.handleInput}>
                                <option checked>Select</option>
                                {this.state.lineManagers.map(managers => {
                                    return <option value={managers.id} key={managers.id}>{managers.firstName + ' ' + managers.lastName}</option>
                                })}
                            </select>
                            <button className='bg-mainGreen p-2 text-sm text-gray-50 rounded' onClick={this.assignUsers}>Finish</button>
                        </div>
                    </div>
                </div> : ''}
            </div>
        );
    }
}

export default allUsers;
