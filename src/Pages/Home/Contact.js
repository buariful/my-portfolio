import React from 'react';

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-semibold text-neutral my-6 text-5xl'>Connect with me</h1>

            <form className='w-8/10 md:w-1/3 mx-auto'>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-3 text-black" /> <br />
                <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-3 text-black" required /> <br />

                <textarea name="" id="" cols="30" rows="8" className=" input-bordered w-full mb-3 rounded-lg px-4 py-2 focus:outline-none text-black" placeholder='Write your message here' required></textarea>

                <input type="submit" value="Send" className='btn btn-primary text-white' />
            </form>
        </div>
    );
};

export default Contact;