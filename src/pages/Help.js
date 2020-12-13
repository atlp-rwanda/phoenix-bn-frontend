import React from 'react';
import Navigation from '../components/common/TopNav';

const helpPage = () => {
  return (
    <div className='w-screen overflow-hidden'>
      <Navigation />
      <div className='py-10 p-5 sm:px-10 md:px-20 bg-gray-100 font-Sansation text-md sm:text-xl md:text-2xl'>
      <p className='font-bold text-2xl md:text-4xl mb-3 mt-11'>We make people genuinely happy</p>
      If you have any question or you need to be clear about our services feel free to contact us or check the frequently asked question below.
     <p className='font-bold text-2xl md:text-4xl mb-3 mt-11'>Frequently Asked Questions</p>

        <p className="text-2xl"> <ul>
        <li>Do I need to care about language of my destination?</li><span className="text-blue-500">No we have a tour guides</span>
        <li></li>
        <li>Why can I trust you?</li><span className="text-blue-500">Yes our business is trusted by every counties</span>
        <li>Do you have branch in Rwanda?</li><span className="text-blue-500">Yes</span>
        </ul></p>
      </div>
    </div>
  )
}

export default helpPage;

