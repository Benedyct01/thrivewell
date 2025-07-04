import React from 'react'
import { GiCheckMark } from 'react-icons/gi';
import { motion } from 'framer-motion'

const Rightsnchoices = () => {
  return (
    <>
    <motion.div
    initial={{ opacity:0, scale:0.6 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
    className='mt-20 bg-neutral-500 p-5 md:p-7 lg:p-10'>
    <div className='w-full text-center text-blue-100 font-bold text-base md:text-lg xl:text-[30px]'>User Rights and Choices</div>
    <div className='flex flex-row p-5 gap-15'>
        <div className='w-1/2 flex flex-col text-sm'>At THRIVE WELL, we value your privacy and are committed to ensuring you have control over your personal information. This section outlines your rights and the choices you have when using our services
        </div>

        <div className='w-1/2 flex flex-col text-sm'>
        <div className='ml-auto flex flex-col justify-end'>
            You have the right to:
           <p> <span className='inline-block'><GiCheckMark/></span>Access, update or delete your personal information.</p>
            <p> <span className='inline-block'><GiCheckMark/></span>Opt-out of non-essential data collection and marketing communications.</p>
            <p> <span className='inline-block'><GiCheckMark/></span>Request a copy of the information we store about you.</p>
        </div>
        
        </div>
    </div>
    <div className='flex flex-row w-full p-5'>
        <div className='w-1/2'><button className='mt-8 h-[47px] w-[150px] rounded-2xl bg-[#0e0e30] hover:bg-indigo-950 text-white text-center text-sm'>I Agree</button></div>
        <div className='w-1/2 flex justify-end'><button className='mt-8 h-[47px] w-[150px] rounded-2xl bg-[#0e0e30] hover:bg-indigo-950 text-white text-center text-sm'>I Disagree</button></div>
    </div>
    </motion.div>
    </>
  )
}

export default Rightsnchoices