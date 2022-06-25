import React from 'react';


const About = () => {
    return (
        <div className='flex justify-between flex-col md:flex-row w-10/12 mx-auto my-6 items-center justify-between' id='about'>
            <img src='https://i.ibb.co/b3vw9BS/aboutMe.png' alt="about" />
            <p className='text-white text-left'>Hello, this <span className='text-primary font-semibold text-xl'>Ariful Islam</span> . I am a junior web developer and a student of mathematics. Mathematics has been my favorite subject since primary school. At the moment I am doing BSc in Mathematics. But coding is my addiction. I want to move forward in my life by improving my coding skills. Like every developer, I want to work in an IT company and build my own career. I wanted to start my career as an entry-level software engineer with a reputed firm driven by technology. I'm thirsty for the trip. I go out with friends whenever I have time. But I prefer to hang out with my family.</p>
            {/* <img src="https://i.ibb.co/b3vw9BS/aboutMe.png" alt="" /> */}
        </div>
    );
};

export default About;