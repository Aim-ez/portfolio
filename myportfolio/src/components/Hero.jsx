import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/hero.png'
import { motion } from 'motion/react'

const animationContainer = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-12">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={animationContainer(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-4 text-2xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
                    >
                        Aimee Schmidt 
                    </motion.h1>
                    <motion.span                    
                        variants={animationContainer(1)}
                        initial="hidden"
                        animate="visible"
                        className="text-3xl md:text-4xl font-light text-slate-500 mb-6">Full Stack Developer  |  CAV Researcher</motion.span>
                    <motion.p 
                        variants={animationContainer(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='text-lg md:text-xl max-w-xl py-4 font-normal bg-gradient-to-r from-slate-500 via-slate-300 to-green-500 bg-clip-text text-transparent leading-relaxed tracking-wide'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-20 flex items-center'>
                <div className='w-full lg:w-1/2 lg:pl-20 flex items-center justify-center'>
                    <motion.img 
                        initial={{x:100, opacity: 0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 2, delay:0}} 
                        className='rounded-full w-52 h-52 lg:w-56 lg:h-56 object-cover border-4 border-transparent bg-clip-border bg-gradient-to-r from-slate-500 via-green-500 to-slate-500 shadow-lg'
                        src={profilePic} 
                        alt="Aimee Schmidt"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero