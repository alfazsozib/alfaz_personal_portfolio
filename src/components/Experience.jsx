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
                <p className='text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt nisi nam quam odit. Modi dolores eos aliquid labore id.</p>
            </div>
            <div className='content flex flex-col gap-4 w-96'>
                <h2 className='text-2xl font-bold font-poppins'>• Web Scraper</h2>
                <p className='text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt nisi nam quam odit. Modi dolores eos aliquid labore id.</p>
            </div>
            <div className='content flex flex-col gap-4 w-96'>
                <h2 className='text-2xl font-bold font-poppins'>• Wordpress</h2>
                <p className='text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt nisi nam quam odit. Modi dolores eos aliquid labore id.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Experience