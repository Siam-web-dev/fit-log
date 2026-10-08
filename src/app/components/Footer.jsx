import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-between w-[95%] mx-auto mt-10 p-5 border-t border-amber-50'>
            <Link href="/" className=" flex gap-2 text-xl items-center"> 
            <Image src={logo} alt="" width={25} height={25}></Image>
             FITLOG</Link> 

             <p className='font-extralight text-blue-400'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
        </div>
    );
};

export default Footer;