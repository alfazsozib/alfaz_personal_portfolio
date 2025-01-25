import React from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import { Parallax } from 'react-parallax'
import { CardData } from '../data/CardData'
import Iframe from 'react-iframe'


function Projects() {
  return (
    <div className='mt-16 lg:mt-32 relative' id='project'>
        <div className='project-sec text-white'>
            <h1 className='text-4xl leading-loose font-poppins font-bold'>Projects</h1>
            <div className='flex justify-between  place-items-end'>
                <p className='w-96 text-lg lg:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis totam iusto.</p>
                <div>
                    <span className='pr-10'>All</span>
                    <span className='pr-10'>Web Development</span>
                    <span className='pr-10'>Web Scraper</span>
                </div>
                
            </div>
        </div>  

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
                <div className=''>
                    <img className='lg:w-[600px] lg:h-[400px] rounded-xl border-black border-2' src={data.projectImage} alt={data.projectName} />
                </div>

            </div>
            
            )}
        </div>  
    </div>
  )
}

export default Projects