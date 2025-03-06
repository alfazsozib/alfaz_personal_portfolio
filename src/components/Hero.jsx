import React from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io";
import cv from "../assets/Alfaz_CV.pdf";

function Hero() {

  const email = 'alfazsozib@gmail.com'; // Replace with your email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('Email copied to clipboard!'); // Optional: Show a success message
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
        alert('Failed to copy email. Please try again.'); // Optional: Show an error message
      });
  };
  return (

  <div className='text-center' id='home'>
    <div className='relative flex items-center flex-col lg:mt-20 mt-12'>
      <p className='text-gray-400 text-[17px] mb-4'>Hello there 👋 I'm Alfaz Hosain</p>
      <h1 className='font-popins font-bold lg:leading-[145px] text-[60px] lg:text-[150px] text-white uppercase'>I Build Website & Scraper's </h1>
      <p className='text-[#d4d4d4] text-center lg:text-[17px] mt-8'>Get fast, effective MERN Stack development and Python scraping tailored <br /> to your goals. Focused on delivering measurable results.</p>
      <div className='flex gap-4 mt-8'>
        <a
      href={cv} // Replace with the correct path to your PDF file
      target="_blank" // Opens the PDF in a new tab
      rel="noopener noreferrer" // Recommended for security when using target="_blank"
      className='text-white px-8 py-2 rounded-full border flex items-center justify-center gap-2 bg-[#FD6F65] hover:bg-[#cf5850b3] transition-colors duration-300'
    >
      Resume
    </a>
        <button
          className='text-white px-8 py-2 rounded-full border flex items-center justify-center gap-2'
          onClick={handleCopyEmail}
        >
          <span><FaRegCopy size={15} /></span> E-mail
        </button>
      </div>
      <div className='flex w-full justify-evenly  mt-24'>
        <IoLogoBitbucket color='#5E686D' size={50}/>
        <IoLogoBitbucket color='#5E686D' size={50}/>
        <IoLogoBitbucket color='#5E686D' size={50}/>
        <IoLogoBitbucket color='#5E686D' size={50}/>
        <IoLogoBitbucket color='#5E686D' size={50}/>
      </div>
    </div>

    
    <div className='mt-20 text-white flex justify-between'>
        <div className='callToAction lg:text-lg  flex flex-col gap-2'>
            {/* <span className='font-bold'>Let's Talk</span>
            <span className=''>alfazsozib@gmail.com</span> */}
        </div> 
        <div className='bio w-96 lg:mr-40 lg:text-lg '>
          {/* <p> <span className='font-bold'> MD Alfaz Hosain </span><br />
          <span className='text-sm font-semibold'> MERN Stack Developer | Python Web Scraper Expert</span>
          <br /><br />
          I specialize in creating modern web applications and landing pages with the MERN stack, along with developing custom web scrapers using Python. Passionate about innovation, I deliver efficient, user-focused solutions.</p> */}
        </div>
    </div>
  </div>
  )
}

export default Hero