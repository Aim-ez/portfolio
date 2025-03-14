import { CONTACT } from "../constants"
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 100}}
          transition={{duration: 1}}
          className="my-20 text-center text-4xl">Contact Me
        </motion.h1>
        <motion.div 
          whileInView={{opacity: 1}}
          initial={{opacity: 0}}
          transition={{duration: 3}}
          className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <p className="my-4">{CONTACT.email}</p>
        </motion.div>
    </div>
  )
}

export default Contact