import React from 'react'
import { CardData } from '../data/CardData'

function Projects() {

  return (
    <div className='mt-16 lg:mt-32 relative' id='project'>
        {/* <div className='project-sec text-white'>
            <h1 className='text-4xl leading-loose font-poppins font-bold'>Projects</h1>
            <div className='flex justify-between  place-items-end'>
                <p className='lg:w-[550px] text-lg lg:text-xl'>Over the years, I have worked on a variety of projects, ranging from dynamic web applications and functional landing pages to custom web scrapers. Working with clients and taking on practice projects has helped me tackle unique challenges and continually deliver better solutions.</p>
                <div className='lg:text-xl font-bold'>
                    <span className='pr-10 cursor-pointer hover:text-[#373636]'>All</span>
                    <span className='pr-10 cursor-pointer hover:text-[#373636]'>Web Development</span>
                    <span className='pr-10 cursor-pointer hover:text-[#373636]'>Web Scraper</span>
                </div>
                
            </div>
        </div>   */}

    {/* Card data  */}
        <div className='img-showcase my-16 lg:my-24'>
            {CardData.map((data,index)=>  
            <div className={`card ${data.color}`} key={index} >
                <div className='card-box text-white'>
                    <div>
                        <small>{data.projectDate}</small>
                        <h1 className='font-poppins text-4xl mt-4 font-bold'>{data.projectName}</h1>
                    </div>
                    <div className='card-info pr-6 font-poppins text-xl lg:text-2xl'>
                        <p>{data.projectDescription}</p>
                    </div>
                </div>
                <img id={`show-image-${data.id}`}  className='hidden' />
                <div className=''>
                    <img id={`target-image-${data.id}`}
                     className='w-[0] lg:w-[600px] lg:h-[400px] rounded-xl hover:scale-110 border-black border-2' src={data.projectImage} alt={data.projectName} />
                </div>

            </div>
            
            )}
        </div>  
    </div>
  )
}

export default Projects