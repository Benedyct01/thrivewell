import React from 'react'
import { motion } from 'framer-motion'
import savelivesbg from '/savelivesbg.png'
import savelivesbgmobile from '/savelivesbgmobile.png'

const Savelives = () => {
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
                backgroundImage: `url(${savelivesbg})`,
                backgroundSize: 'cover',
                backgroundPosition: '40% 40%',
                backgroundRepeat: 'no-repeat',
                }}>
    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[#313030] text-2xl md:text-4xl lg:text-5xl font-bold lg:font-extrabold px-6 py-4">
                        <h1 className='font-semibold text-center'>Together, We Can Save Lives</h1>
                        <p className='text-sm'>Your support fuels our mission to create a world where healthcare is accessible to all. Join us in making a difference—every donation, big or small, brings hope and healing.</p>
                      </span>
                      <button className='w-[150px] md:w-[170px] h-[47px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>DONATE NOW</button>
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
                backgroundImage: `url(${savelivesbgmobile})`,
                backgroundSize: 'cover',
                backgroundPosition: '40% 40%',
                backgroundRepeat: 'no-repeat',
                }}>
    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[#313030] text-base md:text-4xl lg:text-5xl font-bold lg:font-extrabold px-3 py-8">
                        <h1 className='font-semibold text-center'>Together, We Can Save Lives</h1>
                        <p className='text-[8px]'>Your support fuels our mission to create a world where healthcare is accessible to all. Join us in making a difference—every donation, big or small, brings hope and healing.</p>
                      </span>
                      <button className='h-[47px] w-[150px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>DONATE NOW</button>
                    </div>
        </motion.div>
        </section>
        </>
  )
}

export default Savelives