import React from 'react';
import avatar from '../../img/avatar.png'

const Header = () => {
    return (
        <div>
            <div className='flex md:justify-between justify-end flex-col flex-col-reverse md:flex-row md:min-h-screen py-5 md:py-0 items-center w-11/12 md:w-10/12 mx-auto'>
                <div className='text-center md:text-left'>
                    <h4 className='text-neutral'>Hello everyone,</h4>
                    <h1 className='text-4xl md:text-8xl text-secondary font-bold'>This is Ariful islam</h1>
                    <h1 className='text-primary font-bold text-4xl mb-8'>I am a full-stack web developer.</h1>
                    <button class="btn hover:bg-white hover:text-primary btn-outline text-white ml-5 font-bold">My Resume</button>
                </div>
                <div>
                    <img src={avatar} alt="avatar" className='' />
                </div>
            </div>
        </div>
    );
};

export default Header;