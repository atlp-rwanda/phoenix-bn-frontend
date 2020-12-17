import React from 'react';
import TopNavigation from '../components/common/AuthTopNav';
import LeftNavigation from '../components/common/LeftNav'
const DashBoard = () => {
    return (
        <div className='w-screen overflow-hidden'>
            <div className='w-screen bg-mainGreen'>
                <div className='w-1/6 bg-gray-100 fixed left-0 top-0 bottom-0 right-0'>
                    <div className='w-full h-full'>
                        <LeftNavigation />
                    </div>
                </div>
                <div className='w-5/6 float-right fixed right-0 z-10'>
                    <TopNavigation />
                </div>
                <main className='mt-14 p-4 absolute w-5/6 right-0 max-h-screen'>

                </main>

            </div>
        </div>
    )
}

export default DashBoard

