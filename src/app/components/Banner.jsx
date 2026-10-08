import React from "react";
import banner from "../assets/banner.png"; 
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="hero bg-base-200 w-[95%] mx-auto mt-10 rounded-lg  ">
      <div className="hero-content flex-col lg:flex-row-reverse my-15">
        <Image
          alt="Tailwind CSS hero component"
          src={banner}
          width={500}
          height={500}
          className="max-w-sm rounded-lg"
        />
        <div className="mr-50" >
            <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
          <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
          <p className="py-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
            into todays plan, and watch the weeks work add up.
          </p>
          <Link href="/workouts" ><button className="btn rounded-lg bg-[#C2F800] text-black">BROWSE WORKOUTS</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
