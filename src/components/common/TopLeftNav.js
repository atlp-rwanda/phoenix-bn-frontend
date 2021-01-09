import React, { Component } from 'react'
import BellIcon from '../icon/bell'
import UserIcon from '../icon/user'
import { connect } from 'react-redux'
import { httpRequest, successToast } from '../../helpers/httpRequest'
import { authenticatedUser } from '../../actions/auth'
import { LOGOUT_SUCCESS } from '../../actions/actionTypes'

class TopLeftNav extends Component {
    constructor() {
        super()
        this.state = {
    visibility:'hidden',
    isLoggedIn:false
    }}
    toggleMenu(){
        const prop= (this.state.visibility=='hidden')? 'block':'hidden';
        this.setState({...this.state,visibility:prop})

    }

    handleLogout=async(e)=>{
        e.preventDefault()
        const { error, response } = await httpRequest('post', '/users/logout', this.state.userData);
        if (error) {
            return this.setState({ isLoggedIn: false })
        } else {
            successToast(response.data.message);
            this.props.dispatch({type:LOGOUT_SUCCESS,payload:' '});
            localStorage.removeItem('userInfo');
            this.props.history.push('/');
            
        }
       
    }
    
    render() {
        return (
            <div>
                <nav className="flex justify-between w-full z-10  p-3 md:py-3 md:pl-4  md:pr-6 h-full border-b border-gray-100">
                    <div>
                        <div className='flex space-x-6 mt-2'>
                            <div>
                                <BellIcon />
                            </div>
                            <div className='flex text-sm space-x-2 cursor-pointer' onClick={this.toggleMenu.bind(this)}>
                                <UserIcon />
                                <span className='text-black'>{this.props.user.firstName}</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div  className={'bg-white text-black absolute cursor-pointer py-2 px-4 '+this.state.visibility}>
                    <ul>
                        <li>Plofile</li>
                        <li onClick={this.handleLogout}>Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state=>{
    return { user:state.auth.userData
    }
}
const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(TopLeftNav);