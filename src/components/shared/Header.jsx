
import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { compareAsc, format } from 'date-fns';

const Header = () => {

    const dates = new Date();

  

    return (
        <div className='text-center p-10 space-y-2'>
            <Image src={logo} width={300} height={300} alt='logo' className='mx-auto'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;