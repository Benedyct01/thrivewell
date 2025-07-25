import React from 'react'
import expertsaying from '/expertsaying.png'
import { motion } from 'framer-motion'

 const Expertsaying = () => {
  return (
    <>
    <section >
      <motion.div
      initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
      className='w-full'>
      <h1 className="text-center text-[18px] lg:text-[38px] font-semibold px-6 mt-20 md:mt-25 text-[#313030] ">Diabetes & Hypertension</h1>
      <p className='font-semibold text-[#313030] text-center text-[28px] lg:text-[38px] px-4'>What The Experts Are Saying</p>
       {/* Responsive video section */}
      <div className="w-full flex justify-center items-center mt-6 ">
        <video
          src="/diabetesvideo.mp4"
          controls
          className="w-full h-[300px] rounded-lg shadow-lg"
          preload="none"
          poster='/expertsaying.png'
        />
      </div>
      <h1 className="text-center text-[18px] lg:[28px] font-medium px-6 mt-7 text-[#010080] ">At Thrivewell your health is our priority</h1>
      <p className='font-medium text-[#111111] text-center text-[18px] lg:[25px] px-4 py-2'>Stay informed with health tips and insights for managing Diabetes and Hypertension</p>
      </motion.div>
    </section>
    
    </>
  )
}

export default Expertsaying;
