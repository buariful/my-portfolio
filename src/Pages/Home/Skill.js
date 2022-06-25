import React from 'react';
import { SiFirebase, SiTailwindcss, SiHeroku } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiDaisy } from "react-icons/gi";
import SkillImg from '../../img/undraw_feeling_proud_qne1.png'

const Skill = () => {
    return (
        <div className='w-10/12 mx-auto' id='skill'>
            <h1 className='font-semibold text-primary my-6 text-5xl'>My Skills</h1>

            <div className='flex flex-col md:flex-row items-center justify-evenly'>
                <img src={SkillImg} alt="" className='w-56 md:w-96' />
                <div>
                    <p className='text-primary font-bold text-left'>Html</p>
                    <progress className="progress progress-neutral w-56" value="90" max="100"></progress>
                    <p className='text-primary font-bold text-left'>Css</p>
                    <progress className="progress progress-neutral w-56" value="85" max="100"></progress>
                    <p className='text-primary font-bold text-left'>Javascript</p>
                    <progress className="progress progress-neutral w-56" value="80" max="100"></progress>
                    <p className='text-primary font-bold text-left'>React</p>
                    <progress className="progress progress-neutral w-56" value="75" max="100"></progress>
                    <p className='text-primary font-bold text-left'>Express</p>
                    <progress className="progress progress-neutral w-56" value="80" max="100"></progress>
                    <p className='text-primary font-bold text-left'>Mongodb</p>
                    <progress className="progress progress-neutral w-56" value="80" max="100"></progress>

                </div>
            </div>

            <div className='flex items-center justify-around mt-14'>
                <p className='text-secondary font-semibold text-4xl'>Some extra Technologies</p>
                <div className='grid grid-cols-4 gap-5'>
                    <div className='tooltip' data-tip="Github">
                        <FaGithub className='text-4xl text-primary tooltip'></FaGithub>
                    </div>
                    <div className='tooltip' data-tip="Firebase">
                        <SiFirebase className='text-4xl text-primary tooltip'></SiFirebase>
                    </div>
                    <div className='tooltip' data-tip="Re-chart">
                        <AiOutlineAreaChart className='text-4xl text-primary tooltip'></AiOutlineAreaChart>
                    </div>
                    <div className='tooltip' data-tip="Tailwind">
                        <SiTailwindcss className='text-4xl text-primary tooltip'></SiTailwindcss>
                    </div>
                    <div className='tooltip' data-tip="Daisy Ui">
                        <GiDaisy className='text-4xl text-primary tooltip'></GiDaisy>
                    </div>
                    <div className='tooltip' data-tip="HeroKu ">
                        <SiHeroku className='text-4xl text-primary tooltip'></SiHeroku>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;