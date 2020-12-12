import React from 'react';
const Landing=()=>{
   return(
   <div className='w-screen h-screen'>
      <div className= 'w-full h-screen relative'>
         <img src='../images/Rectangle1.png' className='h-full w-full' />
         <div className='absolute w-full h-full top-0 left-0 flex items-center'>
            <div id='curve' className='sm:w-8/12 h-full relative'>
               <img src='../images/curved.png' className='h-max-97 w-full' />
               <div id='text-content' className='absolute space-y-6 flex pl-5 sm:pl-20 font-Sansation font-bold text-white  left-0 border-box top-0 h-max-97 w-full items-center'>
                 <div className='space-y-8'>
                 <p className='text-xl sm:text-2xl md:text-4xl'>Book early save more</p>
                  <div className='relative'>
                     <p className="text-lg">Bare foot is a travel and accomodattion website for nomads.</p>
                     <p className="text-lg">We make your travel experience more woenderful with our incomperable services.</p>
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