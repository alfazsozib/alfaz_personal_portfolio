import React from 'react'

function Nav() {
  return (
    <div id='nav-bar' className='flex justify-center mt-10'>
        <div className='navbar'>
            <ul className='flex bg-secondary text-nav-text font justify-evenly rounded-full text-lg'>
                <li className='hovEffect rounded-full px-6 py-2'>Home</li>
                <li className='hovEffect rounded-full px-6 py-2'>Projects</li>
                <li className='hovEffect rounded-full px-6 py-2'>About</li>
                <li className='hovEffect rounded-full px-6 py-2'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav