"use client";

import React, { useState } from "react";
import { usePlan } from "../components/context/PlanContext";
import Image from "next/image";
import { GoClock, GoX } from "react-icons/go";
import { FaFire, FaRegStar } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import Link from "next/link";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const { todaysPlan, setTodaysPlan, savedPlan, setSavedPlan } = usePlan();
  const [activeTab, setActiveTab] = useState("today");

  const currentPlan = activeTab === "today" ? todaysPlan : savedPlan;

  const exercises = currentPlan.length;

  const minutes = currentPlan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0,
  );

  const calories = currentPlan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0,
  );

  const handleDone = (id) => {
    const updatedPlan = todaysPlan.map((workout) =>
      workout.id === id ? { ...workout, done: true } : workout,
    );

    setTodaysPlan(updatedPlan);
    toast.success("Succefully done");
  };

  const handleRemoveSaved = (id) => {
    const updatedSavedPlan = savedPlan.filter((workout) => workout.id !== id);

    setSavedPlan(updatedSavedPlan);

    toast.success("Removed from saved");
  };

  return (
    <div className="w-[95%] mx-auto ">
      {/* head */}
      <h1 className="text-2xl font-bold">My Plan</h1>
      <p>Cap of five lifts for today. Finish them, then load more.</p>
      {/* calculations */}

      <div className="grid grid-cols-3 bg-base-100 rounded-2xl my-20 p-10">
        <div className="border-r border-amber-50 space-y-3">
          <p>Exercises</p>
          <h1 className="text-4xl font-bold text-amber-300 "> {exercises} </h1>
        </div>
        <div className="border-r border-amber-50 ml-5 space-y-3">
          <p>Minutes</p>
          <h1 className="text-4xl font-bold"> {minutes} </h1>
        </div>
        <div className="ml-5 space-y-3">
          <p>Calories</p>
          <h1 className="text-4xl font-bold"> {calories} </h1>
        </div>
      </div>

      {/* tabs */}

      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab bg-base-100 rounded-lg mr-5"
          aria-label="Today's Plan"
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content border-base-300  p-10">
          <div className="mx-auto">
            {todaysPlan.length === 0 ? (
              <p>No workout added yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {todaysPlan.map((workout) => (
                  <div
                    key={workout.id}
                    className="border rounded-xl p-4 bg-base-100 flex items-center gap-10"
                  >
                    <div>
                      <Image
                        src={workout.image}
                        alt="add image"
                        width={150}
                        height={80}
                        className="rounded-2xl w-60 h-30 object-cover  "
                      ></Image>
                    </div>
                    <div className="flex items-center justify-end ">
                      <div>
                        <h1 className="text-2xl font-bold">{workout.name}</h1>
                        <p> {workout.equipment} </p>
                        <div className=" flex gap-3 pt-3 ">
                          <div className="flex items-center gap-1">
                            <GoClock /> {workout.duration} min{" "}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaFire /> {workout.caloriesBurned}{" "}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaRegStar /> {workout.rating}
                          </div>
                        </div>
                      </div>
                      <div className="flex ml-130 gap-2">
                        <Link href={`/workouts/${workout.id}`}>
                          <button className=" border border-amber-50 rounded-2xl px-5 py-2 ">
                            View Details
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDone(workout.id)}
                          disabled={workout.done}
                          className={`rounded-2xl px-5 py-2 flex items-center gap-1 ${
                            workout.done
                              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                              : "bg-amber-400 text-black"
                          }`}
                        >
                          <MdDone />
                          {workout.done ? "Done" : "Mark as done"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab bg-base-100 rounded-lg"
          aria-label="Saved"
          onChange={() => setActiveTab("save")}
          defaultChecked
        />
        <div className="tab-content border-base-300  p-10">
          <div className="mx-auto">
            {savedPlan.length === 0 ? (
              <p>No Saved item.</p>
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {savedPlan.map((save) => (
                  <div
                    key={save.id}
                    className="border rounded-xl p-4 bg-base-100 flex items-center gap-10"
                  >
                    <div>
                      <Image
                        src={save.image}
                        alt="add image"
                        width={150}
                        height={80}
                        className="rounded-2xl w-60 h-30 object-cover  "
                      ></Image>
                    </div>
                    <div className="flex items-center justify-end ">
                      <div>
                        <h1 className="text-2xl font-bold">{save.name}</h1>
                        <p> {save.equipment} </p>
                        <div className=" flex gap-3 pt-3 ">
                          <div className="flex items-center gap-1">
                            <GoClock /> {save.duration} min{" "}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaFire /> {save.caloriesBurned}{" "}
                          </div>
                          <div className="flex items-center gap-1">
                            <FaRegStar /> {save.rating}
                          </div>
                        </div>
                      </div>
                      <div className="flex ml-130 gap-3 items-center">
                        <Link href={`/workouts/${save.id}`}>
                          <button className=" border border-amber-50 rounded-2xl px-5 py-2 ">
                            View Details
                          </button>
                        </Link>
                        <GoX
                          onClick={() => handleRemoveSaved(save.id)}
                          className="text-3xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
