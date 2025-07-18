import React from 'react'
import deserve from '/deserve.png'
import { motion } from 'framer-motion'

const Deserve = () => {
  return (
      <>
        <section>
                  <div className='flex flex-row-reverse max-md:flex-col gap-4 mt-20 lg:mt-30 mb-30'>
                  <motion.div
                  initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
                  className='w-full md:w-[45%] flex flex-col p-5 mt-20 gap-2 lg:gap-5'>
                  <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold max-md:text-center font-stretch-ultra-expanded text-[#313030]'>You Deserve to be Physically Healthy</h1>
            <p className='text-sm lg:text-[17px] max-md:hidden font-stretch-100% text-[#626262]'>Get instant medical advice, book appointments, and receive prescriptions from certified doctors.</p>
            <button className='max-md:hidden mt-4 h-[47px] w-[170px] rounded-2xl bg-[#010080] hover:bg-indigo-950 text-white'>Login</button>
                  </motion.div>
                  <motion.div
                  initial={{ opacity:0, x:-50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
                  className='w-[55%] max-md:w-full flex justify-end items-end'>
                  <div
                                    className="w-full min-h-[350px] "
                                    style={{
                                      backgroundImage: `url(${deserve})`,
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      height: '350px',
                                      
                                    }}
                                  >
                  </div>
                  </motion.div>
                  <motion.p 
                  initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
                  className='w-full mt-10 p-5 text-sm text-[#626262] min-md:hidden text-center'>Get instant medical advice, book appointments, and receive prescriptions from certified doctors.</motion.p>
                  </div>
                </section>
        </>
  )
}

export default Deserve