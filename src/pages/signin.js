import React, { Component } from 'react'
import Navigation from '../components/common/TopNav'
import SigninComponent from '../components/auth/signin'
import Footer from '../components/common/Footer'
export class signin extends Component {
    render() {
        return (
            <div className='w-screen overflow-hidden'>
            <Navigation/>
            <div className='main pt-14'>
                <SigninComponent />
            </div> 
            <Footer />
          </div>
        )
    }
}

export default signin
