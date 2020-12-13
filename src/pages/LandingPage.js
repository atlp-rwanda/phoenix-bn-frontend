import React from 'react';
import Navigation from '../components/common/TopNav';
import LandingSection from '../components/LandingSection'

const landingPage = () => {
  return (
    <div className='w-screen overflow-hidden'>
      <Navigation />
      <LandingSection />
      <div className='py-10 p-5 sm:px-10 md:px-20 font-Sansation text-md sm:text-xl md:text-2xl'>
        <p className='font-bold text-4xl mb-3'>Welcome to Barefoot nomad</p>
        <p className="text-2xl">An application that enables everyone to book their international travel and accommodation globally, easily and conveniently across all the location where we operate. To continue you need to sign in if you have an account on the website or sign up to create an account.</p>
      </div>
    </div>
  )
}

export default landingPage

