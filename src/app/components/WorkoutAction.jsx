"use client"

import React from 'react';
import { usePlan } from './context/PlanContext';
import { BiMessageAltAdd } from 'react-icons/bi';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

const WorkoutAction = ({workOut}) => {
    const {todaysPlan , setTodaysPlan} = usePlan() ; 

    const handleAddToPlan = () => {
        const alreadyAdded = todaysPlan.some(
            (item) => item.id === workOut.id 
            
        );
        if(alreadyAdded) {
            return toast.warn(" Already Added") ;
        } ; 

        setTodaysPlan([...todaysPlan , workOut]);
        toast.success("Added Today's plan") ;  
    }



    return (
        <div>
            <button 
            onClick={() => handleAddToPlan()}
            className="btn bg-amber-300 text-black "> <BiMessageAltAdd /> Add to todays plan</button>
        </div>
    );
};

export default WorkoutAction;