import React, { Component } from 'react'
import BellIcon from '../icon/bell'
import UserIcon from '../icon/user'
import { connect } from 'react-redux'
import { authenticatedUser } from '../../actions/auth'

class TopLeftNav extends Component {
    state={
    visibility:'hidden',
    isLoggedIn:false

    }
    toggleMenu(){
        const prop= (this.state.visibility=='hidden')? 'block':'hidden';
        this.setState({...this.state,visibility:prop})

    }

    handleLogout=(e)=>{
        e.preventDefault()
        this.props.dispatch({
          type: 'LOGOUT_SUCCESS',
          payload: { isLoggedIn:this.state.isLoggedIn}
        })
    
        this.setState({ postId: this.state.postId + 1 })
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