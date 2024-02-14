import React from 'react';
import {FaGithub,FaLinkedinIn,} from 'react-icons/fa';
import Resume from '../assets/resume/resume.pdf';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Pukar lamichhane
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          With a passion for tackling complex challenges,
          I continually explore and adopt cutting-edge technologies,
          aiming to contribute to the ever-evolving landscape of digital innovation.
        </p>
        <button
         className='text-white group border-2 px-6 py-3 my-2 flex items-center w-[150px] mx-auto hover:bg-pink-600 hover:border-pink-600 rounded text-sm'>
         <a href={Resume} download='resume.pdf'>Download Resume</a>
        </button>
        <div className='flex justify-center flex-row gap-3'>
          <a href='https://github.com/pukarlamichhane' target='_blank' className='w-10 h-10 bg-[#0a192f] rounded-full border border-pink-500 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 rounded text-sm' rel="noreferrer"><FaGithub size={30}/></a>
          <a href='https://www.linkedin.com/in/pukar-lamichhane-047209258/' target='_blank' className='w-10 h-10 bg-[#0a192f] rounded-full border border-pink-500 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 rounded text-sm' rel="noreferrer"><FaLinkedinIn size={30} /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;