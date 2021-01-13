import React, { Component } from 'react';
import { httpRequest, successToast } from '../helpers/httpRequest'
import DataTable from 'react-data-table-component';
import Skeleton from 'react-loading-skeleton';
export class allUsers extends Component {
    state = {
        users: [],
        loading: true,
        modalVisible: false,
        lineManagers: [],
        lineManagerId: "",
        userId: "",
        assigning:false
    }
    columns = [
        {
          name: 'First Name',
          selector: 'firstName',
          sortable: true,
        }, {
          name: 'Last Name',
          selector: 'lastName',
          sortable: true,
        },
        {
          name: 'Email',
          selector: 'email',
          sortable: true,
        },
        {
          name: 'Address',
          selector: 'officeAddres',
          sortable: true,
        },
        {
          name: 'Role',
          sortable: true,
        cell:row => <div>{this.state.loading? '' :row.roles['name']}</div>
        },
        {
          name: 'Line Manager',
          selector: 'lineManager.id',
          sortable: true,
          cell: row => <div>{row.lineManagerInfo===null ? <button value={row.id} className='text-xs bg-red-500 outline-none p-1 text-gray-100 rounded-sm' onClick={this.ShowPopup}>Assign to Manager</button>  : row.lineManagerInfo['firstName']+' '+row.lineManagerInfo['lastName'] }</div>,
        },
      ];
    async componentDidMount() {
        this.getAllUsers();
    }
    getAllUsers = async () => {
        const { response } = await httpRequest('get', '/users');
        if (response) {
            this.setState({ ...this.state.users, users: response.data.data, loading: false })
        }
    }
    ShowPopup = async (e) => {
        const userId = e.target.value;
        this.setState({ ...this.state, modalVisible: true, userId: userId })
        const { response } = await httpRequest('get', '/users/lineManagers');
        if (response) {
            this.setState({ ...this.state.lineManagers, lineManagers: response.data.data })
        }
    }
    closePopup = () => {
        this.setState({ modalVisible: false })
    }
    assignUsers = async () => {
        const { lineManagerId, userId } = this.state
        this.setState({assigning:true});
        const { response } = await httpRequest('put', '/users/manager/assign', { lineManagerId, userId });
        if (response) {
            await this.getAllUsers();
            this.setState({ ...this.state.modalVisible, modalVisible: false ,assigning:false})
            successToast(response.data.message)
        }
        this.setState({assigning:false});
    }
    handleInput = (e) => {
        const lineManagerId = e.target.value
        this.setState({ ...this.state, lineManagerId: lineManagerId })
    }

    render() {
        return (
            <div className='w-full'>
                <div className="w-10/12 p-1 mx-auto">

                    {!this.state.loading ?  <DataTable
                    title="List of all Users"
                    columns={this.columns}
                    data={this.state.users}
                    pagination ={true}
                     
                /> :  <div className='w-full space-y-3'>
                <div className='w-full'>
                <Skeleton height={30} width={400} count={1}/>
                </div>
                <div>
                <Skeleton height={30} count={7}/>
                </div>
               </div> }
            
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
                            <button disabled={this.assigning} className='bg-mainGreen p-2 text-sm text-gray-50 rounded' onClick={this.assignUsers}>{this.state.assigning? 'finishing ...' :'finish'}</button>
                        </div>
                    </div>
                </div> : ''}
            </div>
        );
    }
}

export default allUsers;