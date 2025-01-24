import React from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'


function Projects() {
  return (
    <div className='lg:mt-32' id='project'>
        <div className='project-sec text-white'>
            <h1 className='text-4xl leading-loose font-poppins font-bold'>Projects</h1>
            <div className='flex justify-between  place-items-end'>
                <p className='w-72'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis totam iusto.</p>
                <div>
                    <span className='pr-10'>All</span>
                    <span className='pr-10'>Web Development</span>
                    <span className='pr-10'>Web Scraper</span>
                </div>
                
            </div>
        </div>  

        <div className='img-showcase mt-12 grid grid-cols-2 '>

                <div className='card'>
                    <img className='rounded-2xl' src={image1} alt="" />
                    <div className='card-info'>
                        <span className='name'>Blogdude</span>
                        <span className='category'>Web Development</span>
                    </div>
                </div>
                <div className='card'>
                    <img className='rounded-2xl' src={image2} alt="" /> 
                    <div className='card-info'>
                        <span className='name'>Blogdude</span>
                        <span className='category'>Web Development</span>
                    </div>
                </div>
                <div className='card'>
                    <img className='rounded-2xl' src={image2} alt="" /> 
                    <div className='card-info'>
                        <span className='name'>Blogdude</span>
                        <span className='category'>Web Development</span>
                    </div>
                </div>
              
            
        </div>  
    </div>
  )
}

export default Projects