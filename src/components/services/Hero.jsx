import React from 'react'
import serviceshero from '/serviceshero.png'
import servicesheromobile from '/servicesheromobile.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
    <section>
        <motion.div
        initial={{ opacity:0, x:-50 }}
        whileInView={{ opacity:1, x:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
        className="w-full max-md:hidden min-h-[100svh]"
                                style={{
                                  backgroundImage: `url(${serviceshero})`,
                                  backgroundSize: 'cover',
                                 
                                  backgroundRepeat: 'no-repeat',
                                  
                                }}></motion.div>

        <div className="w-full min-md:hidden min-h-[70svh]"
                                style={{
                                  backgroundImage: `url(${servicesheromobile})`,
                                  backgroundSize: 'cover',
                                  backgroundRepeat: 'no-repeat',
                                  
                                }}></div>
<motion.div
initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.4,
          damping: 20,
        }}
className='flex flex-col min-md:hidden'>
    <div className='w-full mt-10 justify-center flex items-center text-center'><div className='w-12 h-1px bg-black size-0.5 mb-6'></div></div>
        <p className='text-4xl text-center text-red-700 font-semibold'>Our Services</p>
</motion.div>
        
        
        <motion.div
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.4,
          damping: 20,
        }}
        className='w-full max-md:hidden flex flex-row gap-3 items-center mt-5 p-7 px-25'>
                  <div className="h-px size-2 bg-red-700 w-12">
                  </div>
                  <div className='w-full text-bold text-2xl text-black'>Our Services</div>
                </motion.div>
    </section>
    </>
  )
}

export default Hero