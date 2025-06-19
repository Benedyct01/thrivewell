import React from 'react'
import { motion } from 'motion/react'

const Conditionguides = () => {
  return (
    <>
    <section>
        <motion.div
        initial={{ opacity:0, x:-50 }}
        whileInView={{ opacity:1, x:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.3,
          damping: 20,
        }}
        className='grid grid-cols-2 md:grid-cols-3 gap-3 p-5 lg:p-10 bg-[#D7D7D7] '>
    <div className='bg-white group hover:bg-[#79AEBE]'>
        <img src="/diabetes.png" className='w-full' />
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Diabetes</p>
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>More than 30 million people have diabetes; yet, millions don't know they do. Learn why</p>
    </div>
    <div className='bg-white group hover:bg-[#79AEBE]'>
        <img src="/cancer.png" className='w-full' />
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Heart Disease</p>
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Heart disease covers many ailments, but they all add up to the top killer of men and women.</p>
    </div>
    <div className='bg-white group hover:bg-[#79AEBE]'>
        <img src="/depression.png" className='w-full' />
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Depression</p>
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>More than just a passing sadness, depression can undermine quality of life.</p>
    </div>
    <div className='bg-white group hover:bg-[#79AEBE]'>
        <img src="/cardiacarrestman.png" alt="" className='w-full' />
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Cardiac Arrest</p>
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>More than 30 million Americans have diabetes; yet, millions don't know they do. Learn why</p>
    </div>
    <div className='bg-white group hover:bg-[#79AEBE]'>
        <img src="/arthritis.png" className='w-full' />
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Rheumatoid Arthritis</p>
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Rheumatoid arthritis causes more than aching joints.</p>
    </div>
    <div className='bg-white group hover:bg-[#79AEBE]'>
        <img src="/cancer.png" className='w-full' />
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>Cancer</p>
        <p className='text-center p-5 group-hover:text-white group-hover:bg-[#79AEBE]'>More than just a passing sadness, depression can undermine quality of life.</p>
    </div>
        </motion.div>
    </section>
    </>
  )
}

export default Conditionguides