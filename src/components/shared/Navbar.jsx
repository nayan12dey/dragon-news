
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import NavLink from './NavLink';

const Navbar = () => {
    return (
        // <div className='container mx-auto flex justify-between mt-6'>
        //     <div></div>
        //     <ul className='flex justify-between items-center gap-5 text-gray-500'>
        //         <li><Link href={"/"}>Home</Link></li>
        //         <li><Link href={"/about-us"}>About</Link></li>
        //         <li><Link href={"/carrer"}>Carrer</Link></li>
        //     </ul>

        //     <div className='flex items-center gap-2'>
        //         <Image src={userAvatar} width={20} height={20} alt='User avatar'></Image>
        //         <button className='btn bg-red-500 text-white'>
        //             <Link href={"/login"}>Login</Link>
        //         </button>
        //     </div>
        // </div>


        <div className="container mx-auto border-b bg-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-2">

                <div className="text-lg font-semibold text-gray-800">
                   TDN
                </div>

                <ul className="flex items-center gap-8 text-gray-600 font-medium">
                    <li>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/about-us">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/career">
                            Career
                        </NavLink>
                    </li>
                </ul>

                <div className="flex items-center gap-3">
                    <Image
                        src={userAvatar}
                        width={32}
                        height={32}
                        alt="User avatar"
                        className="rounded-full border"
                    />
                    <Link href="/login">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition cursor-pointer">
                            Login
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;