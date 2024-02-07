import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300'>

      <ul className='hidden md:flex justify-center items-center gap-4'>
        <li>
          <Link
            to='home'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to='work'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='home'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleClick}
            to='about'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link
            onClick={handleClick}
            to='skills'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link
            onClick={handleClick}
            to='work'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link
            onClick={handleClick}
            to='contact'
            smooth={true}
            duration={500}
            className='hover:text-white'
            activeClass='text-white'
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
