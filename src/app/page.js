import React, { Suspense } from 'react';
import Banner from './components/Banner';
import Libary from './components/Libary';

const Page = () => {
  return (
    <>
    
       <Banner></Banner>
       <Suspense
         fallback = {
          <div className='text-center'> <span className="loading loading-spinner text-warning"></span></div>
         } >
            <Libary></Libary>
       </Suspense>
    </>
  );
};

export default Page;