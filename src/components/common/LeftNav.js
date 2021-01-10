import React from 'react';
import { useSelector } from 'react-redux';
import UserIcon from '../icon/user';

export default function LeftNav() {
  const { userData } = useSelector((store) => store.auth);
  return (
    <div>
      <div className="w-full">
        <div className="flex pl-2">
          <div className="w-16 h-16 bg-white rounded-full mt-5 flex justify-center pt-5">
            <UserIcon />
          </div>
          <div className="absolute mt-8 text-gray-600 ml-16 pl-4">
            <p>{userData.firstName}</p>
            <p className="text-sm">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
