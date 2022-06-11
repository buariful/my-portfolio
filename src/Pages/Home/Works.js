import React from 'react';

const Works = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-semibold text-neutral my-6 text-5xl'>My recent works</h1>

            <div className='grid md:grid-cols-3 grid-cols-1 my-10 gap-10' >
                {/* project 1 */}
                <div class="card bg-[#081c24d6] shadow-xl">
                    <figure class="px-5 pt-5">
                        <img src="https://i.ibb.co/vzwLRDV/Screenshot-5.png" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-primary">Square Electronics</h2>
                        <div className='flex gap-2 flex-wrap'>
                            <button className='btn btn-xs'>Firebase</button>
                            <button className='btn btn-xs'>React-router</button>
                            <button className='btn btn-xs'>Tialwind</button>
                            <button className='btn btn-xs'>DaisyUi</button>
                            <button className='btn btn-xs'>MERN</button>
                        </div>
                        <div class="card-actions">
                            <a class="btn btn-secondary" href='https://square-electric.web.app/' target='_blank' rel="noreferrer">visit</a>
                        </div>
                    </div>
                </div>

                {/* project 2 */}
                <div class="card bg-[#081c24d6] shadow-xl">
                    <figure class="px-5 pt-5">
                        <img src="https://i.ibb.co/vzwLRDV/Screenshot-5.png" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-primary">Fashion Warehouse</h2>
                        <div className='flex gap-2 flex-wrap'>
                            <button className='btn btn-xs'>Firebase</button>
                            <button className='btn btn-xs'>React-router</button>
                            <button className='btn btn-xs'>Tialwind</button>
                            <button className='btn btn-xs'>DaisyUi</button>
                            <button className='btn btn-xs'>MERN</button>
                        </div>
                        <div class="card-actions">
                            <a class="btn btn-secondary" href='https://fashion-warehouse-23c06.web.app/' target='_blank' rel="noreferrer">visit</a>
                        </div>
                    </div>
                </div>

                {/* project-3 */}
                <div class="card bg-[#081c24d6] shadow-xl">
                    <figure class="px-5 pt-5">
                        <img src="https://i.ibb.co/vzwLRDV/Screenshot-5.png" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-primary">Ar studio</h2>
                        <div className='flex gap-2 flex-wrap'>
                            <button className='btn btn-xs'>React.js</button>
                            <button className='btn btn-xs'>Firebase</button>
                            <button className='btn btn-xs'>React-router</button>
                            <button className='btn btn-xs'>Tialwind</button>
                            <button className='btn btn-xs'>DaisyUi</button>
                        </div>
                        <div class="card-actions">
                            <a class="btn btn-secondary" href='https://incredible-piroshki-93c289.netlify.app/' target='_blank' rel="noreferrer">visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;