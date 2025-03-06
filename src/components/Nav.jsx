import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import personImage from '../assets/images/personImage.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close

function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className='container'>
      {/* Logo and Hamburger Menu (Mobile) */}
      <div className='flex justify-between items-center p-4 lg:justify-center'>
        {/* Logo (Left on Mobile, Centered on Desktop) */}
        <img src={logo} alt='' className='w-16 h-16 lg:w-20 lg:h-20' />

        {/* Hamburger Menu Button (Mobile Only) */}
        {!isMobileNavOpen && ( // Only show hamburger button when mobile nav is closed
          <button
            onClick={toggleMobileNav}
            className='text-[#FD6F65] focus:outline-none lg:hidden'
          >
            <FaBars size={24} />
          </button>
        )}
      </div>

      {/* Desktop Navigation */}
      <div id='nav-bar' className='hidden lg:flex justify-center'>
        <div className='navbar'>
          <ul className='flex items-center border p-2 border-[#FD6F65] text-nav-text font rounded-full text-lg'>
            <img
              className='w-14 lg:mr-20 rounded-full'
              width={90}
              height={90}
              src={personImage}
              alt='profile image'
            />
            <div className='flex lg:gap-8 items-center'>
              <li className='hovEffect rounded-full'>
                <a href='#home'>Home</a>
              </li>
              <li className='hovEffect rounded-full'>
                <a href='#project'>Projects</a>
              </li>
              <li className='hovEffect rounded-full'>
                <a href='#about'>About</a>
              </li>
              <li className='hovEffect rounded-full bg-[#FD6F65] px-8 py-2'>
                <a href='#contact'>Contact</a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#150908] bg-opacity-95 z-50 transition-transform duration-300 ease-in-out ${
          isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button (Top Right Corner) */}
        <button
          onClick={toggleMobileNav}
          className='absolute top-4 right-4 text-[#FD6F65] focus:outline-none'
        >
          <FaTimes size={24} />
        </button>

        {/* Mobile Navigation Links */}
        <div className='flex flex-col items-center justify-center h-full'>
          <ul className='text-white text-center space-y-6'>
            <li className='hovEffect rounded-full'>
              <a href='#home' onClick={toggleMobileNav}>
                Home
              </a>
            </li>
            <li className='hovEffect rounded-full'>
              <a href='#project' onClick={toggleMobileNav}>
                Projects
              </a>
            </li>
            <li className='hovEffect rounded-full'>
              <a href='#about' onClick={toggleMobileNav}>
                About
              </a>
            </li>
            <li className='hovEffect rounded-full bg-[#FD6F65] px-8 py-2'>
              <a href='#contact' onClick={toggleMobileNav}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;