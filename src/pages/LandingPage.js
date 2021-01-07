import React from 'react';
import ClientRecomended from '../components/client';
import Navigation from '../components/common/TopNav';
import DestinationRecomended from '../components/Destination';
import LandingSection from '../components/LandingSection';
import PopularTour from '../components/PoularTour';
import Footer from '../components/common/Footer'

const landingPage = () => (
  <div className="w-screen overflow-hidden">
    <Navigation />
    <LandingSection />
    <div className="py-10 p-5 sm:px-10 md:px-20 text-center  font-Sansation md:text-2xl">

      <DestinationRecomended />
      <PopularTour />
    </div>
    <ClientRecomended />
    <Footer />

  </div>
);

export default landingPage;
