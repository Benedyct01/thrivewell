import React from 'react'
import consultationhero from '/consultationhero.png';
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
      delay: 0.3,
      damping: 20,
    }}
        >
          <div className='flex flex-row max-md:flex-col bg-[#C7DFE7] min-h-[100svh]'>
          <div className='w-[80%] md:w-[50%] lg:w-[50%] flex flex-col p-10 lg:p-20 mt-20 min-lg:min-h-[100svh] min-lg:gap-5 min-xl:p-25 gap-3'>
          <h1 className='text-[2.5rem] max-md:text-[20px] max-md:leading-normal leading-15 text-[#313030]'>Trusted Experts Committed to Your Health</h1>
    <p className='text-sm md:text-[18px] text-[#313030]'>Tired of long hospital waits? Online healthcare consultations offer a faster alternative.</p>
    <button className='min-md:hidden mt-4 h-[50px] w-[190px] rounded-2xl inset-0 bg-[#010080] hover:bg-indigo-950 text-white'>Login</button>
    
          </div>
          <div className='w-[50%] max-lg:w-full md:relative flex justify-end items-end'>
          <div
                            className="w-full min-h-[350px] md:absolute md:top-[20%]"
                            style={{
                              backgroundImage: `url(${consultationhero})`,
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              height: '350px',
                              
                            }}
                          >
          </div>
          </div>
          </div>
        </motion.section>
        </>
  )
}

export default Hero