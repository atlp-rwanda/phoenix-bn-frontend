
import React from 'react';
import Navigation from '../components/common/TopNav';

const aboutPage = () => {
  return (
    <div className='w-screen overflow-hidden'>
      <Navigation />
      <div className='py-10 p-5 sm:px-10 md:px-20 bg-gray-100 font-Sansation text-md sm:text-xl md:text-xl'>
        <p className='font-bold text-4xl mb-3 mt-10'>About us</p>
        <p className="text-lg">The one of the reason we travel is to know the most amazing touristic area around
         the world, expand our business to reduce stress and so on. if you need to travel we can help you by provinding
         accommodation for you and every thing you need to travel.</p>
         <p className='font-bold text-4xl mb-3 mt-10'>What we do</p>
         <p className="text-lg md:text-lg"><ul>
         <li>We allow client to reserve a trip request</li>
         <li>We allow client to book an accommodation</li>
         <li>We plan safe trip by making sure that our client are receiving expected services</li>
         </ul></p>
      </div>
    </div>
  )
}

export default aboutPage;

