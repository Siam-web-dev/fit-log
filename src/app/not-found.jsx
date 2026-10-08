import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center my-50 space-y-10'>
            <h1 className='text-3xl font-bold'>404</h1>
            <h2>page not found</h2>
            <Link href={'/'} className='px-4 py-2 rounded-lg bg-amber-200 text-black font-bold'  >Back</Link>
        </div>
    );
};

export default Notfound;