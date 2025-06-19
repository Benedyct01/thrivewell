import React from 'react'
import { servicearticle } from '../data'
import { motion } from 'motion/react'

const Servicesarticle = () => {
  return (
    <>
    <section>
      
              <motion.div
              initial={{ opacity:0, y:100 }}
            whileInView={{ opacity:1, y:0}}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              damping: 20,
            }}
              className='w-full mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#D7D7D7] p-5'>
          {servicearticle.map((slide) => (
          <div
          className='w-full flex flex-col bg-white p-3 rounded-lg shadow-md gap-4 max-sm:text-xs'>
              <img src={slide.icon} className='w-[20px] h-[20px]'/>
            <h2 className=' font-semibold mb-4'>{slide.title}</h2>
            <p className='justify-center pb-6'>{slide.detail}</p>
          </div>
          ))}
        </motion.div>
        <motion.div
        initial={{ opacity:0, x:-50 }}
        whileInView={{ opacity:1, x:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.5,
          damping: 20,
        }}
        className='w-full items-center justify-center flex inset-0 py-22 bg-white lg:bg-[#D7D7D7]'><div className='bg-[#010080] p-5 flex flex-row gap-5'>
            <img src='/serviceslineleft.png' className='w-20 h-7 inline-block mt-1' />
            <p className='text-xl lg:text-2xl text-white'>Condition Guides</p>
            <img src="/serviceslineright.png" className='w-20 h-7 inline-block mt-1' />
            </div></motion.div>
    </section>
    </>
  )
}

export default Servicesarticle