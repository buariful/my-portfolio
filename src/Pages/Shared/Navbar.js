import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div class="navbar w-11/12 mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52">
                            <li><a href='/home#skill' className='text-white font-semibold'>Skill</a></li>
                            <li><a href='/home#about' className='text-white font-semibold'> About</a></li>
                            <li><a href='/home#contact' className='text-white font-semibold'>Contact</a></li>
                        </ul>
                    </div>


                    <a href='/home' class="btn btn-ghost normal-case text-xl text-white">Ariful Islam</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-0 py-5">
                        <Link className='text-white font-semibold py-3 px-4' to='/'>Home</Link>
                        <li><a href='/home#skill' className='text-white font-semibold'>Skill</a></li>
                        <li><a href='/home#about' className='text-white font-semibold'> About</a></li>
                        <li><a href='/home#contact' className='text-white font-semibold'>Contact</a></li>
                        <Link className='text-white font-semibold py-3 px-4' to='/blog'>Blog</Link>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn hover:bg-white hover:text-primary btn-outline text-white ml-5 font-bold" href='https://drive.google.com/uc?export=download&id=1-PRdpPUyx4cLGzNMtbowXtfGjZGGUkTJ'>My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;