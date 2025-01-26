import React from 'react'

function Experience() {
  return (
    <div className='text-white' id='experience'>
        <div className='lg:mt-32'>
            <h1 className='text-4xl font-semibold leading-loose font-poppins'>Expertise</h1>
        </div>
        <div className='content-box grid grid-cols-1 lg:grid-cols-2 gap-6  mt-12'>
            <div className='content flex flex-col gap-4 w-96'>
                <h2 className='text-2xl font-bold font-poppins'>• Web Development</h2>
                <p className='text-lg lg:text-xl'>Specialized in building modern, responsive web applications and functional landing pages using the MERN stack. I create seamless user experiences with clean, efficient code.</p>
            </div>
            <div className='content flex flex-col gap-4 w-96'>
                <h2 className='text-2xl font-bold font-poppins'>• Web Scraper</h2>
                <p className='text-lg lg:text-xl'>Proficient in developing custom web scrapers using Python to extract and analyze data effectively, tailored to meet specific client needs.</p>
            </div>
            <div className='content flex flex-col gap-4 w-96'>
                <h2 className='text-2xl font-bold font-poppins'>• Wordpress</h2>
                <p className='text-lg lg:text-xl'>Experienced in designing and customizing WordPress websites, delivering visually appealing and fully functional sites optimized for performance and usability.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Experience