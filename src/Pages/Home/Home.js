import React from 'react';
import Contact from './Contact';
import Header from './Header';
import Skill from './Skill';
import Works from './Works';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";


const Home = () => {
    return (
        <div className='text-red-400'>
            <Header></Header>
            <Skill></Skill>
            <Works></Works>
            <Contact></Contact>
            <div className='flex flex-col fixed top-56 right-14 gap-5 border-l-2 pl-2'>
                <a href="https://github.com/buariful" target='_blank' rel="noreferrer"><FaGithub className='text-neutral text-3xl'></FaGithub></a>
                <a href="https://www.facebook.com/buariful" target='_blank' rel="noreferrer"><FaFacebook className='text-neutral text-3xl'></FaFacebook></a>
                <a href="https://www.linkedin.com/in/md-bu-ariful-islam-70210b202/" target='_blank' rel="noreferrer"><FaLinkedin className='text-neutral text-3xl'></FaLinkedin></a>
            </div>
        </div>
    );
};

export default Home;