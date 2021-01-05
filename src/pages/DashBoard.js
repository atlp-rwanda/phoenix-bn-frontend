import React from 'react';
import TopNavigation from '../components/common/AuthTopNav';

const DashBoard = () => (
  <div className="w-screen overflow-hidden">
    <div className="w-screen">
      <div className="w-full bg-blue-700 float-right fixed right-0 z-10">
        <TopNavigation />
      </div>
      <main className="mt-14 p-4 absolute full left-0 max-h-screen text-gray-700" />
    </div>
  </div>
);

export default DashBoard;