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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={animationContainer(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-2xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
                    >
                        Aimee Schmidt
                    </motion.h1>
                    <motion.span 
                        variants={animationContainer(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">CAV Researcher</motion.span>
                    <motion.span                    
                        variants={animationContainer(1)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p 
                        variants={animationContainer(1.5)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter text-justify'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-20 flex items-center'>
                <div className='flex justify-center'>
                    <motion.img 
                        initial = {{x:100, opacity: 0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 2, delay:0}} 
                        className='rounded-2xl' src={profilePic} alt="Aimee Schmidt"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero