import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function Layout() {
  return (
    <>
    <div id='layout' className='lg:my-36 w-full relative'>
      <div className='h-16 flex justify-center items-center lg:h-24 bg-[#060606] text-[#292828e4]'>
        <marquee className="font-poppins text-[2rem] lg:text-[10rem]" behavior="scroll" direction="left"
        loop="infinite" scrollamount="12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, suscipit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, perferendis.
        </marquee>
      </div>
      <div className='h-16 flex mt-2 justify-center items-center lg:h-24 bg-[#060606] text-[#292828e4]'>
      <marquee className="absolute top-8 font-poppins text-[2rem] lg:text-[10rem]" behavior="scroll" direction="right"
        loop="infinite" scrollamount="12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, suscipit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam!
        </marquee>
        </div>
    </div>

     {/* Other parts of the layout will go here  */}

     <div className='container lg:px-5'>
        {/* Add your sections here */}
        <section id='testimonials' className='text-white lg:my-36'>
          <div className='testinmonials'>
            <h2 className='text-4xl leading-loose font-poppins font-bold'>Testimonials</h2>
           <div className='review-text-sec md:flex justify-between items-end'>
                <p className='w-56 lg:w-2/4 text-lg lg:text-xl'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique deleniti dolorem, possimus natus, esse doloribus facere, quisquam distinctio iusto adipisci sunt. Dolores, delectus sunt. Vel blanditiis voluptates libero fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam harum quidem, aut aperiam nesciunt quibusdam nostrum doloremque ullam expedita!</q></p>
                <div className="client-name flex flex-col">
                    <span className='font-bold text-lg'>John Doe</span>
                    <span className='font-light text-md'>- CEO, Example.com</span>
                </div>
           </div>
          </div>
        </section>


        <section id='contact' className='my-24 flex justify-center'>
            <div className='contact text-white flex flex-col gap-2'>
                <h1 className='font-poppins md:text-[150px]'>Let's talk</h1>
                <div className='flex justify-center'>
                    <a href="mailto:alfazsozib@gmail.com">
                    <button hre className='bg-[#141414] hover:bg-[#010101] px-8 py-4 rounded-full text-lg font-semibold cursor-pointer flex items-center justify-center gap-2'>alfazsozib@gmail.com <MdArrowOutward /></button>
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
                </div>
            </div>
        </section>

      </div>
    </>
  )
}

export default Layout