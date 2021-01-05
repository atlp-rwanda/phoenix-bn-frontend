import React from 'react'
import { Link } from 'react-router-dom'
import BellIcon from '../icon/bell'
export default function AuthTopNav() {
    return (
        <div>
            <nav className="flex justify-between bg-white w-full z-10  p-3 md:py-3 md:pl-4  md:pr-6 h-full border-b border-gray-100">
                <Link to="/" className='block'>
                    <span className="text-2xl text-black font-bold  font-Sansation italic">BareFoot</span>
                </Link>
                <div>
                    <div className='flex space-x-6'>
                        <div>
                            <BellIcon/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
