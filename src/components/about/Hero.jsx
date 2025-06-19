import React from 'react'
import abouthero from '/abouthero.png';
import { motion } from 'motion/react'

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
      delay: 0.7,
      damping: 20,
    }}
    className='max-md:hidden relative w-full min-h-[100svh]' 
    style={{
            backgroundImage: `url(${abouthero})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-indigo-900 text-2xl md:text-4xl lg:text-5xl font-bold lg:font-extrabold px-6 py-4">
                    <h1 className='font-semibold text-center'>Bridging the gap between Patients and Donors</h1>
                  </span>
                </div>
    </motion.div>

     <motion.div
    initial={{ opacity:0, x:-50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
    className='min-md:hidden relative w-full min-h-[100svh]' 
    style={{
            backgroundImage: `url(${abouthero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-indigo-900 text-2xl md:text-4xl lg:text-5xl font-bold lg:font-extrabold px-6 py-4">
                    <h1 className='font-semibold text-center'>Bridging the gap between Patients and Donors</h1>
                  </span>
                </div>
    </motion.div>
    </section>
    </>
  )
}

export default Hero