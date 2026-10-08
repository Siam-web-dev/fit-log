import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";

const getLibaryData = async () => {
  const rsc = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });
  const data = await rsc.json();
  return data;
};

const WorkOutDetailPage = async ({ params }) => {
  const { workoutsId } = await params;
  const data = await getLibaryData();

  const workOutData = data.find(
    (data) => String(data.id) === String(workoutsId),
  );
  if (!workOutData) notFound();
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
  } = workOutData;

  return (
    <div className="w-[95%] mx-auto my-10">
      <div className="card card-side shadow-sm flex gap-15 grid-cols-2">
        <figure>
          <Image src={image} alt= "details img" width={500} height={600} className=" rounded-2xl w-160 h-190 object-cover" >
          </Image>
        </figure>
        <div className="flex flex-col space-y-5">
          <h2 className="card-title font-bold text-5xl"> {name} </h2>
          <p > {description} </p>
          {/*  */}
          <div className="flex gap-5 items-center">
            <div><p className="bg-amber-400 rounded-2xl text-black flex text-center font-semibold items-center px-4 py-0.5 ">{muscleGroups[0]}</p></div>
            <div><p className="bg-amber-400 rounded-2xl text-black flex text-center font-semibold items-center px-4 py-0.5">{muscleGroups[1]}</p></div>
          </div>
          {/*  */}

        <div className="bg-base-100 rounded-2xl border border-amber-50 ">
            <div className="flex justify-between  p-4" >
                <p className="text-[#9CA3AF] font-semibold">Equipment</p> <p>{equipment}</p>
            </div>
            <hr className=" bg-amber-50"/>
            <div className="flex justify-between p-4" >
                <p className="text-[#9CA3AF] font-semibold">DIFFICULTY</p> <p> {difficulty} </p>
            </div>
            <hr className=" bg-amber-50"/>
            <div className="flex justify-between p-4" >
                <p className="text-[#9CA3AF] font-semibold">SETS</p> <p>{sets}</p>
            </div>
            <hr className=" bg-amber-50"/>
            <div className="flex justify-between p-4" >
                <p className="text-[#9CA3AF] font-semibold">REPS</p> <p>{reps}</p>
            </div>
            <hr className=" bg-amber-50"/>
            <div className="flex justify-between p-4" >
                <p className="text-[#9CA3AF] font-semibold">DURATION</p> <p>{duration} min </p>
            </div>
            <hr className=" bg-amber-50"/>
            <div className="flex justify-between p-4" >
                <p className="text-[#9CA3AF] font-semibold">CALORIES</p> <p>{caloriesBurned}</p>
            </div>
            <hr className=" bg-amber-50"/>
            <div className="flex justify-between p-4" >
                <p className="text-[#9CA3AF] font-semibold">RATING</p> <p>{rating}</p>
            </div>
        </div>

            <div className="space-y-4 mb-10">
                <h1 className="font-bold text-3xl">INSTRUCTIONS : </h1>
                <p> 1. {instructions[0]} </p>
                <p> 2. {instructions[1]} </p>
                <p> 3. {instructions[2]} </p>
                <p> 4. {instructions[3]} </p>
            </div>

            {/*  */}
          <div className="card-actions">
            <button className="btn bg-amber-300 text-black "> <BiMessageAltAdd /> Add to todays plan</button>
            <button className="btn border border-amber-100  "> <FaBookmark /> Save for later</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutDetailPage;
