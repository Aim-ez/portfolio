import React from 'react'
import aboutImg from '../assets/eyeball.png'
import { ABOUT_TEXT } from '../constants'

const AboutMe = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='text-4xl my-20 text-center'>About Me</h1>

        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default AboutMe