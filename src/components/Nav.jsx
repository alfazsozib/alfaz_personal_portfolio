import React from 'react'
import logo from '../assets/images/logo.png'

function Nav() {
  return (
    <div className='container'>
    <div className='flex justify-center'>
        <img src={logo} alt="" className='w-20 h-20' />
    </div>
    <div id='nav-bar' className='flex justify-center'>
      
        <div className='navbar'>
            <ul className='flex bg-secondary text-nav-text font justify-evenly rounded-full text-lg'>
                <li className='hovEffect rounded-full px-6 py-2'>Home</li>
                <li className='hovEffect rounded-full px-6 py-2'>Projects</li>
                <li className='hovEffect rounded-full px-6 py-2'>About</li>
                <li className='hovEffect rounded-full px-6 py-2'>Contact</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Nav