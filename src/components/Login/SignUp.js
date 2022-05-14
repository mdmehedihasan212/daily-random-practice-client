import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    let errorMessage;

    useEffect(() => {
        if (gUser || user) {
            console.log(gUser || user);
            navigate('/')
        }
    }, [gUser, user, navigate])

    if (gLoading || loading) {
        return <Loading></Loading>
    }

    if (gError || error) {
        errorMessage = <p><small>{gError?.message || error?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)

    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-3xl font-medium text-center'>Sign Up</h1>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide A Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password Should Minimum 6 Character'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                <span className="text-red-500">{errorMessage}</span>
                            </label>
                            <label className="label">
                                <span className="label-text">Forget Password?</span>
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs uppercase' value='Sign Up' type="submit" />
                        <p className='mt-2 text-center'>Already have an account? <Link to='/login'>Please Login</Link></p>
                        <div className="divider my-6">OR</div>

                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline uppercase w-full">
                            Continue With Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;