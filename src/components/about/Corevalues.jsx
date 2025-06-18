import React from 'react'
import { motion } from 'motion/react'

const Corevalues = () => {
  return (
    <>
    <section>
        <div className='w-full p-5 flex flex-col md:flex-row mt-20'>
            <motion.div
            initial={{ opacity:0, x:-50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.6,
      damping: 20,
    }}
            className='w-full md:w-1/2 flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-3 max-md:text-center max-md:justify-center max-md:items-center'>
                <img src="/corevalues.png" alt="corevalues" className='w-3 h-3' />
                <p className='font-light text-lg lg:text-2xl max-md:text-center'><span className='min-md:hidden'>Our </span>Core Values</p>
            </div>
            <h1 className='font-bold text-2xl lg:text-4xl max-md:text-center'>Your Journey to Better Health Starts Here</h1>
            <button className='max-md:hidden h-[47px] w-[150px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>Core Values</button>
            </motion.div>
            
            <motion.div
            initial={{ opacity:0, x:50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
            className='w-full md:w-1/2 flex flex-col gap-5 p-2'>
            <div className='flex flex-row gap-5'>
                <div className='w-[5%]'><img src='/iconcheck.png'/></div>
                <div className='w-[95%] flex flex-col gap-3'>
                <h1 className='text-lg lg:text-3xl text-neutral-600 font-semibold flex flex-row'>Compassion</h1>
            <p className='text-sm md:text-lg lg:text-xl'>We prioritize the well-being of individuals living with chronic illnesses by offering</p>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='w-[5%]'><img src='/iconcheck.png'/></div>
                <div className='w-[95%] flex flex-col gap-3'>
                <h1 className='text-lg lg:text-3xl text-neutral-600 font-semibold flex flex-row'>Innovation</h1>
            <p className='text-sm md:text-lg lg:text-xl'>We leverage technology and modern healthcare solutions to provide seamless, accessible, and effective health management tools.</p>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='w-[5%]'><img src='/iconcheck.png'/></div>
                <div className='w-[95%] flex flex-col gap-3'>
                <h1 className='text-lg lg:text-3xl text-neutral-600 font-semibold flex flex-row'>Education</h1>
            <p className='text-sm md:text-lg lg:text-xl'>We equip our users with knowledge, resources, and community support to help them take charge of their health with confidence.</p>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <div className='w-[5%]'><img src='/iconcheck.png'/></div>
                <div className='w-[95%] flex flex-col gap-3'>
                <h1 className='text-lg lg:text-3xl text-neutral-600 font-semibold flex flex-row'>Empowerment</h1>
            <p className='text-sm md:text-lg lg:text-xl'>We are committed to transparency, trust, and excellence, ensuring that every service we provide meets the highest ethical and medical standards.</p>
                </div>
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.8,
      damping: 20,
    }}
            className='flex justify-center items-center mt-5'>
            <button className='min-md:hidden h-[47px] w-[150px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>Core Values</button>
            </motion.div>
        </div>
    </section>
    </>
  )
}

export default Corevalues