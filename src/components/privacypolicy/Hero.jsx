import React from 'react'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <>
    <motion.section
    initial={{ opacity:0, x:-50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
    className='mb-15'>
        <div className='w-full min-h-[100svh] relative'>
            <img src="/privacypolicyhero.png" alt="privacypolicy" className='object-cover bg-no-repeat bg-center w-full min-h-[100svh]'/>
            <img src='/privacypolicyblob.png' className='absolute top-0 right-0 z-1 h-[40%] max-lg:hidden'/>
            <span className='absolute top-[50vh] text-white text-7xl font-bold inset-0 w-full text-center'>Privacy Policy</span>
        </div>
    </motion.section>
    </>
  )
}

export default Hero