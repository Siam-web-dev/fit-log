import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire, FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";

const LibaryCard = ({ libaryData }) => {
  const {
    id, 
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = libaryData;
  console.log("from card", libaryData);
  return (
    <Link href={`/workouts/${id}`} >
    <div className="card bg-base-100 shadow-sm">
      <figure className=" relative w-full h-70 overflow-hidden  ">
        <Image src={image} alt="card image" fill className= "object-cover"></Image>
      </figure>
      <div className="card-body">
        <div className="flex gap-5 items-center">
            <div><p className="bg-amber-400 rounded-2xl text-black text-center font-semibold px-3 ">{muscleGroups[0]}</p></div>
            <div><p className="bg-amber-400 rounded-2xl text-black text-center font-semibold px-3">{muscleGroups[1]}</p></div>
        </div>
        <h2 className="card-title font-bold text-2xl"> {name} </h2>
        <p className="font-light">
          {equipment}
        </p>
        <div className=" border-t border-blue-400 flex gap-3 pt-3 ">
            <div className="flex items-center gap-1"><GoClock /> {duration} min </div>
            <div className="flex items-center gap-1"><FaFire /> {caloriesBurned} </div>
            <div className="flex items-center gap-1"><FaRegStar /> {rating}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default LibaryCard;
