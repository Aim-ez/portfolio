import { RiReactjsLine } from "react-icons/ri"
//import { FaPython } from "react-icons/fa"
import { SiMongodb, SiJavascript } from "react-icons/si"
import { motion } from "motion/react"
import { FaJava, FaC } from "react-icons/fa6"
import pythonLogo from "../assets/python.png"
import javaLogo from "../assets/java.png"

const animateIcon = (duration) => ({
        initial: {y: -10},
        animate: {
                y: [10, -10],
                transition: {
                        duration: duration,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                }
        }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
                whileInView={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration: 3}}
                className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={animateIcon(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={animateIcon(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
                variants={animateIcon(1.25)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
                variants={animateIcon(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div 
                variants={animateIcon(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={pythonLogo} alt="Python Logo" className="max-h-[4.5rem]"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies