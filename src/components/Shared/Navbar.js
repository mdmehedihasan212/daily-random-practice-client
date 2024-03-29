import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('token')
    }

    return (
        <div class="navbar bg-base-100 px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/inventory'}>Inventory</Link></li>
                        <li><Link to={'/signup'}>Sign Up</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                </div>
                <Link to={'/'} class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/inventory'}>Inventory</Link></li>
                    <li><Link to={'/signup'}>Sign Up</Link></li>

                </ul>
            </div>
            <div class="navbar-end">
                {user ?
                    <Link onClick={handleSignOut} to={'/login'} class="btn">Sign Out</Link>
                    :
                    <Link class="btn" to={'/login'}>Login</Link>
                }
            </div>
            <label tabIndex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;