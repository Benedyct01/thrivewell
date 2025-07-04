import React from 'react'
import {motion} from 'framer-motion'
import joinushero from '/joinushero.png'
import aboutbgone from '/aboutbgone.png'

const Joinus = () => {
  return (
    <>
    <section className='mt-8'>
    <motion.div
    initial={{ opacity:0, x:-50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
    className='relative w-full min-h-[400px] max-md:hidden' 
    style={{
            backgroundImage: `url(${joinushero})`,
            backgroundSize: 'cover',
            backgroundPosition: '40% 40%',
            backgroundRepeat: 'no-repeat',
            }}>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl md:text-4xl lg:text-5xl font-bold lg:font-extrabold px-6 py-4">
                    <h1 className='font-semibold text-center'>Join Us In Building A Healthier Future</h1>
                    <p className='text-sm'>Your donation to Thrivewell isn’t just a gift-it’s a lifeline for someone in urgent need. Together, we can ensure that everyone, regardless of their background, has access to quality healthcare</p>
                  </span>
                </div>
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
    className='relative w-full min-h-[250px] md:hidden' 
    style={{
            backgroundImage: `url(${aboutbgone})`,
            backgroundSize: 'cover',
            backgroundPosition: '40% 40%',
            backgroundRepeat: 'no-repeat',
            }}>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-base md:text-4xl lg:text-5xl font-bold lg:font-extrabold px-3 py-8">
                    <h1 className='font-semibold text-center'>Join Us In Building A Healthier Future</h1>
                    <p className='text-[8px]'>Your donation to Thrivewell isn’t just a gift-it’s a lifeline for someone in urgent need. Together, we can ensure that everyone, regardless of their background, has access to quality healthcare</p>
                  </span>
                </div>
    </motion.div>
    </section>
    </>
  )
}

export default Joinus