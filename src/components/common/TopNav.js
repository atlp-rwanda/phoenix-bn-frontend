import React from 'react'
import { Link } from 'react-router-dom'
export default function TopNav() {
    return (
        <div className='absolute w-full h-auto z-10'>
            <nav className="flex justify-between bg-white w-full md:w-topNav  p-3 md:py-3 md:pl-4  md:pr-28 h-full md:rounded-br-full">
                <Link to="/" className='block'>
                    <span className="text-2xl text-black font-bold  font-Sansation italic">BareFoot</span></Link>
                <Link to='/login' className="bg-mainGreen py-1 px-5">
                    Login
                </Link>
            </nav>
        </div>
    )
}
