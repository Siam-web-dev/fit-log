import React from 'react';
import LibaryCard from '../components/LibaryCard';

const getLibaryData = async() => {
    const rsc = await fetch("https://api.abcz.workers.dev/api/fitlog" , {
        cache : "no-store"
    }) ; 
    const data = await rsc.json() ;
    return data ; 
}


const WorkoutPage = async() => {
    const data = await getLibaryData() ;
    console.log("workout page" , data);
    return (
        <div className='w-[95%] mx-auto'>
            <h1 className='text-2xl font-bold text-center my-5'>All Workouts</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    data.map(libaryData => <LibaryCard key={libaryData.id} libaryData ={libaryData } ></LibaryCard>)
                }
            </div>
        </div>
    );
};

export default WorkoutPage;