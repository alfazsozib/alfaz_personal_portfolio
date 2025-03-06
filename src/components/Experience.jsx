import React from 'react'

function Experience() {
    return (
        <div className='text-white font-Poppins' id='experience'>
            <div className='lg:mt-32'>
                <h1 className='text-4xl font-semibold leading-loose font-Poppins uppercase'>Who Am I</h1>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12'>
                <div>
                    <p className='lg:text-xl text-gray-300'>I'm MD Alfaz Hosain, a MERN Stack Developer <br /> and Python Web Scraper Expert.</p>
                </div>

                <div className='lg:w-96 lg:mr-40 lg:text-xl text-gray-300'>
                    <p>I specialize in building modern, responsive web applications and high-converting landing pages using the MERN stack. Additionally, I develop custom web scrapers with Python to automate data collection and streamline workflows. <br /> <br />

                    Passionate about technology and innovation, I’m dedicated to delivering efficient, scalable, and user-centric solutions that help businesses grow and achieve their goals.
                    </p>

                    <div className='mt-12 flex justify-between'>
                        <div className='flex flex-col lg:gap-6 gap-4 text-[#FD6F65]'>
                            <h1 className='lg:text-[65px] leading-5 font-bold'>30+</h1>
                            <p className='lg:text-[16px] leading-5'>Projects <br /> Completed</p>
                        </div>
                        <div className='flex flex-col lg:gap-6 gap-4  text-[#FD6F65]'>
                            <h1 className='lg:text-[65px] leading-5 font-bold'>15+</h1>
                            <p className='lg:text-[16px] leading-5'>Satisfied <br /> Client's</p>
                        </div>
                        <div className='flex flex-col lg:gap-6 gap-4  text-[#FD6F65]'>
                            <h1 className='lg:text-[65px] leading-5 font-bold'>50+</h1>
                            <p className='lg:text-[16px] leading-5'>Positive <br /> Reviews</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* hr element  */}
            <div className='lg:my-44 my-16'>
                <hr className='b-hr'/>
            </div>

            <div className='expertise' id='expertise'>
                <h1 className='text-4xl font-semibold leading-loose font-Poppins uppercase'>Expertise</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12 mt-12'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Web Development</h1>
                        <p className='text-lg'>I create dynamic, responsive web applications and functional landing pages using the MERN stack. My focus is on delivering high-quality, user-friendly solutions that help businesses grow and succeed.</p>
                        <div className='lg:mt-12 my-8'>
                            <hr />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Wordpress</h1>
                        <p className='text-lg'>Experienced in designing and customizing WordPress websites, delivering visually appealing and fully functional sites optimized for performance and usability.
                        </p>
                        <div className='lg:mt-12 my-8'>
                            <hr />
                        </div>
                        
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Web Scraper</h1>
                        <p className='text-lg'>I develop custom web scrapers using Python to automate data collection, extract valuable insights, and streamline workflows. By leveraging web scraping techniques, I help businesses gain a competitive edge and drive growth.</p>
                        <div className='lg:mt-12 my-8'>
                            <hr />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Project Management</h1>
                        <p className='text-lg'>Efficient in managing projects from start to finish, ensuring timely delivery and clear communication.</p>
                        <div className='lg:mt-12 my-8'>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Experience