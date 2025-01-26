import React from 'react'

function Hero() {
  return (

  <div className='' id='home'>
    <div className='relative mt-20'>
      <h1 className='font-popins font-bold leading-[165px] text-[100px] lg:text-[200px] text-white'>Websites& Scraper's </h1>
    </div>
    
    <div className='mt-20 text-white flex justify-between'>
        <div className='callToAction lg:text-lg  flex flex-col gap-2'>
            <span className='font-bold'>Let's Talk</span>
            <span className=''>alfazsozib@gmail.com</span>
        </div> 
        <div className='bio w-96 lg:mr-40 lg:text-lg '>
          <p> <span className='font-bold'> MD Alfaz Hosain </span><br />
          <span className='text-sm font-semibold'> MERN Stack Developer | Python Web Scraper Expert</span>
          <br /><br />
          I specialize in creating modern web applications and landing pages with the MERN stack, along with developing custom web scrapers using Python. Passionate about innovation, I deliver efficient, user-focused solutions.</p>
        </div>
    </div>
  </div>
  )
}

export default Hero