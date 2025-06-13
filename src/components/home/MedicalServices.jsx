import React from 'react'
import medicalservices from '/medicalservices.png'
import { FaCheck } from "react-icons/fa6";
import { motion } from 'motion/react'

const MedicalServices = () => {
  return (
    <>
    <section>
      <motion.div
      initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
      className='w-[80%] mx-auto flex flex-row max-lg:flex-col-reverse mt-20 justify-center items-center border-indigo-900 min-lg:border rounded-2xl'>
    <div className='w-[50%] max-lg:w-full medicalbg'
                              style={{
                                backgroundImage: `url(${medicalservices})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '462px',
                                
                                
                              }}
      >
      </div>
      <div className='w-[50%] max-lg:w-full flex flex-col max-lg:p-10 min-lg:p-20 min-lg:ml-10 gap-4'>
        <div className='flex flex-row gap-3 items-center'>
                  <div className="h-px size-2 bg-neutral-300 w-12">
                  </div>
                    <p className=' text-sm tracking-widest text-black font-semibold'>Virtual Care</p>
                </div>
              <h1 className='text-3xl'>Medical Services</h1>
              
              <div className='flex flex-row'><FaCheck/><span className='ml-5'>Talk to a specialist</span></div>
              <div className='flex flex-row'><FaCheck/><span className='ml-5'>24/7 Medical Support</span></div>
              <div className='flex flex-row'><FaCheck/><span className='ml-5'>Virtual Consultation from Home</span></div>
              <button className='mt-4 h-[50px] w-[190px] rounded-2xl inset-0 bg-[#010080] text-white'>Book Now</button>
              
              
              
      </div>
      </motion.div>
      
    </section>
    </>
  )
}

export default MedicalServices