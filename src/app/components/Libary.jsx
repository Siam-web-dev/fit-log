import React, { Suspense } from 'react';
import LibaryCard from './LibaryCard';


const getLibaryData = async() => {
    const rsc = await fetch("https://api.abcz.workers.dev/api/fitlog" , {
        cache : "no-store"
    }) ; 
    const data = await rsc.json() ;
    return data ; 
}

const Libary = async () => {

    const getData = await getLibaryData() ;

    console.log( "from libery" , getData) ;

    return (
        
        <div className='w-[95%] mx-auto mt-10'>
            <div>
                <h1 className='font-bold text-3xl'>THE LIBRARY</h1>
            <p className='font-light'>Twelve lifts covering every major muscle group.</p>
            </div>
            {/* main data */}
            <div className='grid grid-cols-3 gap-10 mt-10 '>
                {
                    getData.map((libaryData) => <LibaryCard key={libaryData.id} libaryData={libaryData} ></LibaryCard> )
                }
            </div>
            
        </div>
    );
};

export default Libary;