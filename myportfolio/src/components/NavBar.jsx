import React from 'react'
import logo from '../assets/logo-no-back.png'
import {FaLinkedin, FaGithub } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div>
        <img className="mx-1 w-20" src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/aimee-schmidt-4129a7335" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-white text-2xl mx-2' />
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/Aim-ez" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-white text-2xl mx-2' />
          </a>   
      </div>
    </nav>

  )
}

export default NavBar
  