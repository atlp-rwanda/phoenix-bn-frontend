import React, { Component,Fragment } from 'react'
import BellIcon from '../icon/bell'
import UserIcon from '../icon/user'
import { connect } from 'react-redux'

class TopLeftNav extends Component {
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
                <nav className="flex justify-between w-full z-10  p-3 md:py-3 md:pl-4  md:pr-6 h-full">
                    <div>
                        <div className='flex space-x-9 mt-2'>
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

export default connect(mapStateToProps)(TopLeftNav);