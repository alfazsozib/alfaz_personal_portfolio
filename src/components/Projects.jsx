import React from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'
import image8 from '../assets/images/image8.jpg'

function Projects() {
  return (
    <div className='lg:mt-32' id='projects'>
        <div className='project-sec text-white'>
            <h1 className='text-3xl font-semibold leading-loose'>Projects</h1>
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
                <div className='card'>
                    <img className='rounded-2xl' src={image1} alt="" />
                    <div className='card-info'>
                        <span className='name'>Blogdude</span>
                        <span className='category'>Web Development</span>
                    </div>
                </div>
                <div className='card'>
                    <img className='rounded-2xl' src={image4} alt="" />
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