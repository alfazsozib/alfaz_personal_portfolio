import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaStar } from "react-icons/fa";

function Layout() {
  return (
    <>
      <div id='layout' className='lg:my-36 w-full relative'>
        <div className='h-16 flex justify-center items-center lg:h-24 text-[#FD6F65]'>
          <marquee className="font-Poppins text-[2rem] lg:text-[10rem]" behavior="scroll" direction="left"
            loop="infinite" scrollamount="12">
            Web Development, Landing Pages, and Scraping Solutions. Custom designs, seamless builds, and tailored results!
          </marquee>
        </div>
        <div className='h-16 flex mt-2 justify-center items-center lg:h-24 text-[#FD6F65]'>
          <marquee className="absolute top-8 font-Poppins text-[2rem] lg:text-[10rem]" behavior="scroll" direction="right"
            loop="infinite" scrollamount="12">
            Web Development, Landing Pages, and Scraping Solutions. Custom designs, seamless builds, and tailored results!
          </marquee>
        </div>
      </div>

      {/* Other parts of the layout will go here  */}

      <div className='container lg:px-5 px-5'>
        {/* Add your sections here */}
        <section id='testimonials' className='text-white lg:my-36'>
          <div className='testimonial-box grid grid-cols-1 md:grid-cols-2 gap-12 font-Poppins text-[17px]'>
            <div className='border px-12 py-6 border-[#FD6F65] rounded-xl flex flex-col gap-4'>
              <h1 className='flex items-center gap-2'>
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
              </h1>
              <p>I have worked with Alfaz on a number of projects and he always delivers top-class output. He goes above and beyond and I would highly recommend using him for any work required.</p>
              <h1>Alfaz</h1>
            </div>
            <div className='border px-12 py-6 border-[#FD6F65] rounded-xl flex flex-col gap-4'>
              <h1 className='flex items-center gap-2'>
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
              </h1>
              <p>Alfaz EXCEEDED my expectations with his professionalism and incredible attention to detail in developing scrapper. Working with him was a breeze thanks to his deep understanding and quick responsiveness. Highly recommend! 👍</p>
              <h1>Alfaz</h1>
            </div>
            <div className='border px-12 py-6 border-[#FD6F65] rounded-xl flex flex-col gap-4'>
              <h1 className='flex items-center gap-2'>
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
              </h1>
              <p>I recently had the pleasure of working with Alfaz on a screen scraping software project, and I must say, the experience was nothing short of excellent. The initial setup did have a few bugs, but that's to be expected with any custom software solution. What impressed me was Alfaz's commitment to resolving these issues promptly. Within just a few days, all the bugs were ironed out, and the software was running smoothly.</p>
              <h1 className='mt-6'>Alfaz</h1>
            </div>
            <div className='border px-12 py-6 border-[#FD6F65] rounded-xl flex flex-col gap-4'>
              <h1 className='flex items-center gap-2'>
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
                <FaStar color='#FD6F65' />
              </h1>
              <p>I am very pleased with the work done. They paid close attention to detail and ensured that the project was completed to my liking. They even did 1:1 call to get a better understanding of how the website worked! They responded super quick and answered all of the questions that I have. You will not be disappointed.</p>
              <h1 className='mt-6'>Alfaz</h1>
            </div>
          </div>

        </section>


        <section id='contact' className='my-24 flex justify-center'>
          <div className='contact text-white flex flex-col gap-2'>
            <h1 className='font-Poppins md:text-[150px]'>Let's talk</h1>
            <div className='flex justify-center'>
              <a href="mailto:alfazsozib@gmail.com">
                <button hre className='bg-[#FD6F65] hover:bg-[#e55a50] px-8 py-4 rounded-full text-lg font-semibold cursor-pointer flex items-center justify-center gap-2'>alfazsozib@gmail.com <MdArrowOutward /></button>
              </a>
            </div>

          </div>
        </section>

        <section className='footer my-12' id='footer'>
          <div className='flex justify-between items-center'>
            <div className='copy-right-text'>
              <p className='text-white text-lg'>2025© -Made with ❤️ by Alfaz.</p>
            </div>
            <div className='social-icons text-white flex gap-8 text-lg'>
              <a href="https://github.com/alfazsozib" target='_blank'>Github</a>
              <a href="https://www.linkedin.com/in/md-alfaz-hosain-b20260164/" target='_blank'>LinkedIn</a>
              <a href="https://www.fiverr.com/users/ma_ruf" target='_blank'>Fiverr</a>
              <a href="https://wa.me/8801304396916" target='_blank'>WhatsApp</a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Layout