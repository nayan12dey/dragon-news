"use client"



import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    console.log("user", user)




    return (
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

                {isPending ? <span className="loading loading-spinner text-error"></span>
 : user ? (<div className="flex  items-center gap-3">
                    <h2 className='text-sm'>Hello, {user.name}</h2>
                    <Image
                        src={user.image || userAvatar}
                        width={32}
                        height={32}
                        alt="User avatar"
                        className="rounded-full border"
                    />

                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition cursor-pointer" onClick={async() => await authClient.signOut()}>Logout</button>

                </div>) :
                    (<button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition cursor-pointer">
                        <Link href="/login">
                            Login
                        </Link>
                    </button>)}
            </div>
        </div>
    );
};

export default Navbar;