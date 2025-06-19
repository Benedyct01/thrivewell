import React from 'react'
import { motion } from 'motion/react'

const Ourgoals = () => {
  return (
    <>
    <section className='mb-10'>
        <motion.div
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
        className='flex flex-col-reverse mt-10'>
            <div className='w-full mt-3 justify-center flex items-center text-center'><div className='w-12 h-1px bg-black size-0.5 mb-6'></div></div>
        <p className='text-4xl text-center text-black font-semibold'>Our Goals</p>
        </motion.div>

        <motion.div
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.4,
          damping: 20,
        }}
        className='grid grid-cols-2 md:grid-cols-4 p-5 gap-5'>
            <div className='bg-[#D7D7D7] rounded-xl p-5 flex-col relative'>
                <p className='pt-10 pb-30  text-xs md:text-sm text-[#313030]'> We aim to reach underserved communities by funding medical programs, clinics, and essential treatments.</p>
            <div className='absolute bg-[#79AEBE] flex flex-row bottom-0 left-0 w-full rounded-b-xl p-4'>
                <p className='mt-2 mr-6 lg:mr-19 text-[10px] md:text-xs text-[#313030]'>Dr Ward Brenda</p>
                <img src="/brenda.png" className='w-8 h-8' alt="" />
            </div>
            </div>

            <div className='bg-[#D7D7D7] rounded-xl p-5 flex-col relative'>
                <p className='pt-10 pb-30  text-xs md:text-sm text-[#313030]'> We offer financial assistance to help peoeple who don’t have funds for treatments receive the care they deserve.</p>
            <div className='absolute bg-[#79AEBE] flex flex-row bottom-0 left-0 w-full rounded-b-xl p-4'>
                <p className='mt-2 mr-6 lg:mr-19 text-[10px] md:text-xs text-[#313030]'>Dr. Martins Austin</p>
                <img src="/austin.png" className='w-8 h-8' alt="" />
            </div>
            </div>

            <div className='bg-[#D7D7D7] rounded-xl p-5 flex-col relative'>
                <p className='pt-10 pb-30  text-xs md:text-sm text-[#313030]'> Education, screenings, and wellness programs help prevent diseases and improve overall health outcomes.</p>
            <div className='absolute bg-[#79AEBE] flex flex-row bottom-0 left-0 w-full rounded-b-xl p-4'>
                <p className='mt-2 mr-6 lg:mr-19 text-[10px] md:text-xs text-[#313030]'> Dr. Amber Chopp</p>
                <img src="/chopp.png" className='w-8 h-8' alt="" />
            </div>
            </div>

            <div className='bg-[#D7D7D7] rounded-xl p-5 flex-col relative'>
                <p className='pt-10 pb-30  text-xs md:text-sm text-[#313030]'> By funding training and resources, we support doctors, nurses, and caregivers in delivering high-quality care.</p>
            <div className='absolute bg-[#79AEBE] flex flex-row bottom-0 left-0 w-full rounded-b-xl p-4'>
                <p className='mt-2 mr-4 lg:mr-19 text-[10px] md:text-xs text-[#313030]'> Dr Michelle Ambrose</p>
                <img src="/ambrose.png" className='w-8 h-8' alt="" />
            </div>
            </div>
        </motion.div>
    </section>
    </>
  )
}

export default Ourgoals