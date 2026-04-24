
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-8'>
            <h2 className='text-5xl font-bold text-gray-500'>This Page is not found</h2>
            <Link href={"/"}><button className='btn p-5 btn-dash'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;