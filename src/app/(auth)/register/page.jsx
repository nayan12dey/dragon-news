"use client"


import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const { register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const handleRegisterFunc = async (data) => {
        console.log(data);

        const { email, name, photo, password } = data;
        console.log(name, photo);



        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })

        console.log("data", res)
        console.log("error", error);

        if (error) {
            alert(error.message)
        }

        if (res) {
            alert("SignUp Successful")
        }
    }

    console.log("watch", watch("email"))

    const [isShowPassword, SetIsShowPassword] = useState(false)






    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Email address</legend>
                        <input type="text" className="input" placeholder="Enter your email address" name='email' {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}


                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Name</legend>
                        <input type="text" className="input" placeholder="Enter your name" name='name' {...register("name", { required: "Name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Photo URL address</legend>
                        <input type="text" className="input" placeholder="Enter your photo url" name='email' {...register("photo", { required: "Photo URL field is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input" placeholder="Enter your password" name='password'
                            {...register("password", { required: "Password field is required" })}
                        />
                        <span className='absolute right-10 top-5 cursor-pointer' onClick={() => SetIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn bg-mist-700 text-white w-full'>Register</button>
                </form>

                <p className='mt-4 text-sm text-center'>Don’t Have An Account ? <Link href={'/register'} className='text-red-500 hover:text-red-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;







// 47-5 Logged In User, Signout, Password Toggle theke start korbo