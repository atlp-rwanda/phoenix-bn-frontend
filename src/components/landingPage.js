import React,{Component} from 'react';
import Navigation from './Navigation';
import LandingSection from './LandingSection';
import Footer from './Footer';
import { useSelector } from 'react-redux'

const landingPage = () => {
    const counter = useSelector(store => store.counter)
    return (
        <div>
          <Navigation />
          <LandingSection />
          <Footer />
        </div>
    )
}

export default landingPage

