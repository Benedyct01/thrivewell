import React from 'react'
import { motion } from 'framer-motion'

const Dedicated = () => {
  return (
    <>
    <section className='bg-[#C7DFE7] max-lg:mb-10'>
        <div className='w-full flex flex-1/2 flex-col-reverse md:flex-row p-5 md:p-5 lg:p-20 md:gap-2 lg:gap-20 xl:gap-50'>
            <motion.div
            initial={{ opacity:0, scale:0.6 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
            className='w-full md:w-[36%] lg:w-[36%] flex flex-col max-md:gap-3 gap-7 max-md:items-center max-md:justify-center max-md:text-center'>
                <div className='max-md:hidden flex flex-col max-md:gap-1 gap-3 md:mt-[50%]'>
                  <div className="h-px size-5 w-30 bg-black">
                  </div>
                    <p className=' text-sm text-[#515151] tracking-widest font-semibold'>Meet a Doctor</p>
                </div>
                <h2 className='max-md:mt-5 font-light text-base md:text-3xl'>We're Dedicated To Your Well-Being</h2>
                <p className='text-sm text-[#515151]'>What's your biggest concern when it comes to online healthcare consulatations? Let's talk!"</p>
                <button className='h-[47px] w-[150px] md:w-[170px] rounded-2xl bg-[#010080] hover:bg-indigo-950 text-white max-md:mb-3'>Contact Us</button>
            </motion.div>

            
            <div className='max-md:hidden w-[64%] lg:w-[50%] xl:w-[38%] grid grid-cols-2 gap-0 max-lg:mt-12'>
                
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
                src='/docone.png' className='rounded-3xl min-w-[200px] min-h-[150px] items-end justify-end'/>
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
                src='/doctwo.png' className='rounded-3xl -mt-28 min-w-[200px] min-h-[150px] items-start justify-start'/>
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
                src='/docthree.png' className='rounded-3xl min-w-[200px] min-h-[150px]'/>
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
                src='/docfour.png' className='rounded-3xl -mt-20 min-w-[200px] min-h-[150px]'/>
            </div>
            <div className='min-md:hidden min-w-[60%] items-center justify-around mx-auto grid grid-cols-2 gap-2 mt-15'>
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
                src='/mobiledocone.png' className='rounded-3xl -28 min-w-[130px] min-h-[170px] scale-x-[-1] mx-auto -mt-15'/>
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
                src='/mobiledoctwo.png' className='rounded-3xl min-w-[130px] min-h-[170px] scale-x-[-1] mx-auto'/>
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
                src='/mobiledocthree.png' className='rounded-3xl  min-w-[130px] min-h-[170px] scale-x-[-1] mx-auto -mt-15'/>
                <motion.img
                initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
                src='/mobiledocfour.png' className='rounded-3xl min-w-[130px] min-h-[170px] scale-x-[-1] mx-auto'/>
            </div>
            <motion.div
            initial={{ opacity:0, scale:0.6 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
            className='min-md:hidden flex flex-col gap-3 mt-[5%] ml-auto'>
                    <p className='text-sm text-[#515151] tracking-widest font-semibold'>Meet a Doctor</p>
                    <div className="h-px size-5 w-30 bg-black">
                  </div>
                </motion.div>
        </div>
    </section>
    </>
  )
}

export default Dedicated