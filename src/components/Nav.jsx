import React from 'react'
import logo from '../assets/images/logo.png'
import personImage from "../assets/images/personImage.png"

function Nav() {
  return (
    <div className='container'>
    <div className='flex justify-center'>
        <img src={logo} alt="" className='w-20 h-20' />
    </div>
    <div id='nav-bar' className='flex justify-center'>
      
        <div className='navbar'>
            <ul className='flex items-center border p-2 border-[#FD6F65] text-nav-text font rounded-full text-lg'>
                <img className='w-14 lg:mr-20 rounded-full' width={90} height={90} src={personImage} alt="profile image" />
                <div className='flex lg:gap-8 items-center'>
                    <li className='hovEffect rounded-full '><a href="#home">Home</a></li>
                    <li className='hovEffect rounded-full '><a href="#project">Projects</a></li>
                    <li className='hovEffect rounded-full '><a href="#about">About</a></li>
                    <li className='hovEffect rounded-full bg-[#FD6F65] px-8 py-2'><a href="#contact">Contact</a></li>
                </div>
                
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Nav