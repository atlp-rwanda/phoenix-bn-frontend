import React from 'react';
import HouseImage from '../images/Rectangle1.png';
import Skeleton from "react-loading-skeleton";
import Curve from '../images/curved.png'
const Landing=()=>{
   return(
   <div className='w-screen h-screen'>
      <div className= 'w-full h-screen relative'>
         <img src={HouseImage} className='h-full w-full' />
         <div className='absolute w-full h-full top-0 left-0 flex items-center'>
            <div id='curve' className='sm:w-8/12 h-full relative'>
               <img src={Curve} className='h-max-97 w-full' />
               <div id='text-content' className='absolute space-y-6 flex pl-5 sm:pl-20 font-Sansation font-bold text-white  left-0 border-box top-0 h-max-97 w-full mt-52'>
                 <div className='space-y-2'>
                 <p className='text-4xl'>Book early save more</p>
                 
                  <div className='relative'>
                     <p className="text-lg">Bare foot is a travel and accomodattion website for nomads.</p>
                     <p className="text-lg">We make your travel experience more wonderful with our incomperable services</p>
                  </div>
                 </div>
               </div>
            </div>
         </div>
      </div>
      <div>
      </div>
   </div>
   );
}
export default Landing;