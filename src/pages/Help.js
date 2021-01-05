import React from 'react';
import Navigation from '../components/common/TopNav';

const helpPage = () => (
  <div className="w-screen overflow-hidden">
    <Navigation />
    <div className="py-10 p-5 sm:px-10 md:px-20 bg-gray-100 font-Sansation text-md sm:text-lg">
      <p className="font-bold text-2xl md:text-xl mb-3 mt-11">We make people genuinely happy</p>
      If you have any question or you need to be clear about our services feel free to contact us or check the frequently asked question below.
      <p className="font-bold text-2xl md:text-4xl mb-3 mt-11">Frequently Asked Questions</p>

      <p className="text-lg">
        {' '}
        <ul>
          <li>Do I need to care about language of my destination?</li>
          <span className="text-blue-500">No we have a tour guides</span>
          <li />
          <li>Why can I trust you?</li>
          <span className="text-blue-500">Yes our business is trusted by every counties</span>
          <li>Do you have branch in Rwanda?</li>
          <span className="text-blue-500">Yes</span>
          <li>Every trip request is accepted?</li>
          <span className="text-blue-500">No some times we cancel any trip request when there is some thing that is not good</span>
        </ul>
      </p>
    </div>
  </div>
);

export default helpPage;
