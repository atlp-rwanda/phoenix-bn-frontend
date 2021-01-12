import React, { Component } from 'react'
import Navigation from '../components/common/TopNav1'
import ProfileComponent from '../components/Profile'
import Footer from '../components/common/Footer'

export class profile extends Component {
    render() {
        return (
            <div className='w-screen overflow-hidden'>
                <Navigation />
                <div className='main p-4'>
                    <ProfileComponent />
                </div>

            </div>
        )
    }
}

export default profile
