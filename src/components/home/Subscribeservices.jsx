import React from 'react'
import subscribefour from '/subscribefour.png'
import { motion } from 'motion/react'


const Subscribeservices = () => {
  return (
    <>
    <section>
      <div className='w-[90%] mt-25 max-md:mt-0 bg-neutral-400 max-md:bg-white mx-auto rounded-2xl'>
      <motion.div
      initial={{ opacity:0, x:50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
      className='flex flex-row max-lg:flex-col p-5 '>
      <div className='w-[50%] max-lg:w-full flex flex-col p-5 gap-4'>
            <h1 className="max-md:text-center max-sm:text-[14px] text-2xl font-semibold px-6 mt-7 text-[#D1001F] ">Pro Wellness</h1>
      <p className='font-medium text-[#204BAF] max-md:text-center max-sm:text-[24px] text-4xl px-4 py-2'>Pro Subscribers Services</p>
      <div className='font-medium flex flex-row'><img src='/subscribeiconone.png' className='mr-3 w-5 h-5'/><span className='max-sm:text-[16px] text-2xl'>Custom Nutrition Plan</span></div>
      <div className='font-medium flex flex-row'><img src='/subscribeicontwo.png' className='mr-3 w-5 h-5'/><span className='max-sm:text-[16px] text-2xl'>Community Support and Forum</span></div>
      <div className='font-medium flex flex-row'><img src='/subscribeiconthree.png' className='mr-3 w-5 h-5'/><span className='max-sm:text-[16px] text-2xl'>Insurance HMO</span></div>
      <button className='h-[37.35px] w-[109px] rounded-2xl  bg-[#010080] text-white text-center text-sm'>Subscribe</button>
      </div>
      <div className='w-[50%] max-lg:w-full p-10 max-md:p-4 h-[374px] max-sm:h-[230px] mx-auto subscribebg'
                                    style={{
                                      backgroundImage: `url(${subscribefour})`,
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      
                                    }}
            ></div>
            </motion.div>
      <div className='flex flex-row max-md:flex-wrap justify-center items-center max-md:p-0 p-20'>
      <motion.p
      initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.6,
      damping: 20,
    }}
      className='font-medium text-[#204BAF] text-center text-[20px] px-4 py-2 min-md:hidden'>SUBSCRIPTION PLAN</motion.p>
      <motion.div
      initial={{ opacity:0, y:-50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
      className='w-full flex flex-row max-md:flex-wrap justify-center items-center gap-10 max-md:gap-5'>
            <div className='w-1/3 flex flex-col p-7 max-md:p-4 bg-white max-md:bg-neutral-400 max-md:hover:shadow-2xl max-md:hover:transition max-md:hover:duration-500 min-md:rounded-2xl items-center justify-center text-center group min-md:hover:scale-y-110 min-md:hover:transition-transform min-md:hover:border-2 min-md:hover:duration-500 min-md:hover:border-indigo-900'>
              <div className='p-3 w-30 max-md:w-25 max-md:bg-transparent h-10 max-md:h-6 bg-neutral-400 text-sm max-md:text-xs rounded-4xl mx-auto text-center'>1 Month Plan</div>
              <p className='text-center text-sm max-md:text-[10px] p-3 max-md:p-0'>Up to 5% Discount</p>
              <p className='relative w-full text-center m-5 max-md:m-0 max-md:mt-5 pb-3 max-md:pb-0'><span className="relative z-10">₦5,000</span>
  <span
    className="max-md:hidden
      absolute left-0 bottom-0 h-0.5 w-full bg-indigo-900
      origin-left scale-x-0
      transition-transform duration-300 ease-in-out
      group-hover:scale-x-100
      min-md:group-hover:scale-x-100
      pointer-events-none
    "
  ></span></p>
              <button className='p-3 w-30 max-md:w-20 max-md:bg-white h-10 bg-neutral-400 text-sm max-md:text-[10px] max-md:text-xs rounded-lg mx-auto text-center max-md:mb-2 mb-5 max-md:hover:text-white hover:text-white hover:bg-indigo-900 max-md:hover:bg-red-500'>Subscribe</button>
            </div>
            <motion.div
            initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.8,
      damping: 20,
    }}
            className='w-1/3 flex flex-col p-7 max-md:p-4 bg-white max-md:bg-neutral-400 max-md:hover:shadow-2xl max-md:hover:transition max-md:hover:duration-500 min-md:rounded-2xl items-center justify-center text-center group min-md:hover:scale-y-110 min-md:hover:transition-transform min-md:hover:border-2 min-md:hover:duration-500 min-md:hover:border-indigo-900'>
              <div className='p-3 w-30 max-md:w-25 max-md:bg-transparent h-10 max-md:h-6 bg-neutral-400 text-sm max-md:text-xs rounded-4xl mx-auto text-center'>3 Month Plan</div>
              <p className='text-center text-sm max-md:text-[10px] p-3 max-md:p-0'>Up to 7% Discount</p>
              <p className='relative w-full text-center m-5 max-md:m-0 max-md:mt-5 pb-3 max-md:pb-0 '><span className="relative z-10">₦12,000</span>
  <span
    className="max-md:hidden
      absolute left-0 bottom-0 h-0.5 w-full bg-indigo-900
      origin-left scale-x-0
      transition-transform duration-300 ease-in-out
      group-hover:scale-x-100
      min-md:group-hover:scale-x-100
      pointer-events-none
    "
  ></span></p>
              <button className='p-3 w-30 max-md:w-20 max-md:bg-white h-10 bg-neutral-400 text-sm max-md:text-[10px] max-md:text-xs rounded-lg mx-auto text-center max-md:mb-2 mb-5 max-md:hover:text-white hover:text-white hover:bg-indigo-900 max-md:hover:bg-red-500'>Subscribe</button>
            </motion.div>
            <motion.div
            initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.9,
      damping: 20,
    }}
            className='w-1/3 flex flex-col p-7 max-md:p-4 bg-white max-md:bg-neutral-400 max-md:hover:shadow-2xl max-md:hover:transition max-md:hover:duration-500 min-md:rounded-2xl items-center justify-center text-center group min-md:hover:scale-y-110 min-md:hover:transition-transform min-md:hover:border-2 min-md:hover:duration-500 min-md:hover:border-indigo-900'>
              <div className='p-3 w-30 max-md:w-25 max-md:bg-transparent h-10 max-md:h-6 bg-neutral-400 text-sm max-md:text-xs rounded-4xl mx-auto text-center'>6 Month Plan</div>
              <p className='text-center text-sm max-md:text-[10px] p-3 max-md:p-0'>Up to 10% Discount</p>
              <p className='relative w-full text-center m-5 max-md:m-0 max-md:mt-5 pb-3 max-md:pb-0'><span className="relative z-10">₦25,000</span>
  <span
    className="max-md:hidden
      absolute left-0 bottom-0 h-0.5 w-full bg-indigo-900
      origin-left scale-x-0
      transition-transform duration-300 ease-in-out
      group-hover:scale-x-100
      min-md:group-hover:scale-x-100
      pointer-events-none
    "
  ></span></p>
              <button className='p-3 w-30 max-md:w-20 max-md:bg-white h-10 bg-neutral-400 text-sm max-md:text-[10px] max-md:text-xs rounded-lg mx-auto text-center max-md:mb-2 mb-5 max-md:hover:text-white hover:text-white hover:bg-indigo-900 max-md:hover:bg-red-500'>Subscribe</button>
            </motion.div>
      </motion.div>
      </div>
      <motion.div
      initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 1.0,
      damping: 20,
    }}
      className='text-center text-sm text-neutral-700 p-5'>Includes 7-day free trial. Cancel anytime.</motion.div>
      
        <div className="flex justify-center items-center w-full p-5">
        <motion.button
        initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 1.0,
      damping: 20,
    }}
        className='w-[70%] h-15 bg-red-500 text-white hover:text-red-500 hover:bg-white hover:border hover:border-red-500 justify-center items-center rounded-2xl mb-6'>
          Continue for Free
        </motion.button>
      </div>
      </div>
    </section>
    </>
  )
}

export default Subscribeservices