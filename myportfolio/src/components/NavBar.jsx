import React from 'react'
import logo from '../assets/logo-no-back.png'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div>
        <img className="mx-1 w-20" src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
        <FaLinkedin className='text-white text-2xl mx-2' />
        <FaGithub className='text-white text-2xl mx-2' />
        <FaInstagram className='text-white text-2xl mx-2' />
      </div>
    </nav>

  )
}

export default NavBar
  