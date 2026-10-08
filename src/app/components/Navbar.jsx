import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png" ;

const Navbar = () => {
  const link = (
    <>
      <li>
        <Link href="/workouts" className="text-[#C2F800] bg-[#1A2312] rounded-lg">
          Workouts
        </Link>
      </li>
      <li>
        <Link href="/myplan" className="text-[#9CA3AF]">
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="  border-b-2 border-base-100">
      <div className="navbar w-[95%] mx-auto  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl items-center"> 
          <Image src={logo} alt="" width={25} height={25}></Image>
          FITLOG</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-8">
          <a className="">Plan</a> 
          <a className="">Saved</a> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
