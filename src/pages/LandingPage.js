import React from 'react';
import Navigation from '../components/common/TopNav';
import LandingSection from '../components/LandingSection'
import Footer from '../components/common/Footer'
const landingPage = () => {
  return (
    <div className='w-screen overflow-hidden'>
      <Navigation position='absolute'/>
      <LandingSection />
      <div className='py-10 p-5 sm:px-10 md:px-20 font-Sansation text-md sm:text-xl md:text-2xl'>
        <p className='font-bold text-4xl mb-3'>Welcome to Barefoot nomad</p>
        <p className="text-xl">An application that enables everyone to book their international travel and accommodation globally, easily and conveniently across all the location where we operate. To continue you need to sign in if you have an account on the website or sign up to create an account.</p>
      </div>
      <Footer />
    
    </div>
  )
}

export default landingPage

