import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BellIcon from '../icon/bell'
import UserIcon from '../icon/user'
import { connect } from 'react-redux'
import ManagerNav from '../common/navs/manager'

class AuthTopNav extends Component {
    state={
    visibility:'hidden',
    }
    toggleMenu(){
        const prop= (this.state.visibility=='hidden')? 'block':'hidden';
        this.setState({...this.state,visibility:prop})
    }
    
    render() {
        return (
            <div>
            <nav className="flex justify-between bg-formColor w-full z-10  p-3 md:py-3 md:pl-4  md:pr-6 h-full border-b border-gray-100">
                <Link to="/" className='block'>
                    <span className="text-xl text-white font-bold  font-Sansation italic">
                    BareFoot
                    </span>
                    
                </Link>
                

                <div>
                    <div className='flex space-x-6 mt-2'>
                        <div>
                            <BellIcon color='text-white' />
                        </div>
                        <div className='flex text-sm space-x-2 cursor-pointer' onClick={this.toggleMenu.bind(this)}>
                            <UserIcon color={'text-white'} />
                            <span className='text-white'>{this.props.user.firstName}</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div  className={'bg-formColor text-white absolute right-6 py-2 px-4 '+this.state.visibility}>
                <ul>
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
        )
    }
    
}

const mapStateToProps = state=>{
    return { user:state.auth.userData}
}

export default connect(mapStateToProps)(AuthTopNav);