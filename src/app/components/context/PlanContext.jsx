"use client"

import React, { createContext, useContext, useState } from 'react';

const PlanContext = createContext() ;


const PlanProvider = ( {children} ) => {

    const [ todaysPlan , setTodaysPlan ] = useState([]) ;
    const [ savedPlan , setSavedPlan ] = useState([]) ;

    return (
        <PlanContext.Provider
         value={{ todaysPlan , setTodaysPlan , savedPlan , setSavedPlan }}
         >
            {children}
        </PlanContext.Provider>
    );
  
};

export const usePlan = () => {
        return useContext(PlanContext) ;
    }

export default PlanProvider;