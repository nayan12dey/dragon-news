"use client"


import { authClient } from '@/lib/auth-client';
import { error } from 'better-auth/api';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const handleLoginFunc = async (data) => {
        console.log(data)

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });


        console.log("res", res)
        console.log("error", error)
    }





    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Email address</legend>
                        <input type="text" className="input" placeholder="Enter your email address" name='email' {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input type="password" className="input" placeholder="Enter your password" name='password'
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn bg-mist-700 text-white w-full'>Login</button>
                </form>

                <p className='mt-4 text-sm text-center'>Don’t Have An Account ? <Link href={'/register'} className='text-red-500 hover:text-red-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage



