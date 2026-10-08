"use client"
import React from 'react';
import { usePlan } from './context/PlanContext';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';





const SaveButton = ({saveData}) => {

    const {savedPlan , setSavedPlan} = usePlan(); 
 
    const handleSave = () => {
    const alreadySaved = savedPlan.some(
        (item) => item.id === saveData.id
    );

    if (alreadySaved) {
        return toast.warn("Already Saved");
    }

    setSavedPlan([...savedPlan, saveData]);

    toast.success("Saved for later");
    };
    return (
        <div>
            <button
            onClick={() => handleSave()}
            className="btn border border-amber-100  "> <FaBookmark /> Save for later</button>
        </div>
    );
};

export default SaveButton;