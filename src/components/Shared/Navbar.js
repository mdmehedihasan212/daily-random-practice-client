import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    if (loading) {
        return <Loading></Loading>
    }

    const items =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/signup'}>Sign Up</Link></li>
        </>
    return (
        <div class="navbar bg-base-100 px-16">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>

                </div>
                <Link to={'/'} class="btn btn-ghost normal-case text-2xl">daisyUI</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-lg">
                    {items}
                </ul>
            </div>
            <div class="navbar-end">
                {user ?
                    <button class="btn">Sign Out</button>
                    :
                    <Link class="btn" to={'/login'}>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;