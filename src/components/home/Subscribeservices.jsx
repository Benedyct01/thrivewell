import React from 'react'
import subscribefour from '/subscribefour.png'
import { motion } from 'framer-motion'


const Subscribeservices = () => {
  return (
    <>
    <section>
      <motion.div
      initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
      className='w-[90%] mt-25 max-md:mt-0 bg-[#D7D7D7] max-md:bg-white mx-auto rounded-2xl'>
      <div 
      className='flex flex-row max-lg:flex-col p-5 '>
      <div className='w-[50%] max-lg:w-full flex flex-col p-5 gap-4'>
            <h1 className="max-md:text-center max-sm:text-[14px] text-2xl font-semibold px-6 mt-7 text-[#D1001F] ">Pro Wellness</h1>
      <p className='font-medium text-[#204BAF] max-md:text-center max-sm:text-[24px] text-4xl px-4 py-2'>Pro Subscribers Services</p>
      <div className='font-medium flex flex-row'><img src='/subscribeiconone.png' className='mr-3 w-5 h-5'/><span className='max-sm:text-[16px] text-2xl'>Custom Nutrition Plan</span></div>
      <div className='font-medium flex flex-row'><img src='/subscribeicontwo.png' className='mr-3 w-4 h-4'/><span className='max-sm:text-[16px] text-2xl'>Community Support and Forum</span></div>
      <div className='font-medium flex flex-row'><img src='/subscribeiconthree.png' className='mr-3 w-5 h-5'/><span className='max-sm:text-[16px] text-2xl'>Insurance HMO</span></div>
      <button className='w-[150px] md:w-[170px] h-[47px] rounded-2xl  bg-[#010080] text-white text-center text-sm'>Subscribe</button>
      </div>
      <div className='w-[50%] max-lg:w-full p-10 max-md:p-4 h-[374px] max-sm:h-[230px] mx-auto subscribebg'
                                    style={{
                                      backgroundImage: `url(${subscribefour})`,
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      
                                    }}
            ></div>
            </div>
      <div className='flex flex-row max-md:flex-wrap justify-center items-center max-md:p-0 p-20'>
      <motion.p
      initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
      className='font-medium text-[#010080] text-center text-[20px] px-4 py-2 min-md:hidden'>SUBSCRIPTION PLAN</motion.p>
      <div className='w-full flex flex-row max-md:flex-wrap justify-center items-center gap-10 max-md:gap-5 h-[445px]'>
            <motion.div
            initial={{ opacity:0, y:-50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
            className='w-1/3 flex flex-col max-md:gap-4 bg-[#010080] max-md:hover:shadow-2xl max-md:hover:transition max-md:hover:duration-500 items-center justify-center text-center group hover:scale-110 hover:transition-transform hover:border-2 hover:duration-500 hover:border-[#6C6CAB]'>
              <div className='relative w-full h-[90px] max-md:h-[45px] bg-[#C7DFE7] text-sm max-md:text-xs'><span className='absolute inset-0 flex items-center justify-center text-[8px] md:text-[23px] font-medium'>Basic</span></div>
              <p className='text-center text-sm max-md:text-[10px] text-white p-3 max-md:p-0'>Up to 5% Discount</p>
              <p className='relative w-full text-center m-5 max-md:m-0 max-md:mt-5 pb-3 max-md:pb-0'><span className="relative z-10 text-white">₦5,000</span>
  </p>
              <button className='p-3 w-30 max-md:w-20  h-10 bg-white text-sm max-md:text-[10px] max-md:text-xs rounded-lg mx-auto text-center max-md:mb-7 mb-12 max-md:hover:text-white hover:text-white hover:bg-[#6C6CAB]'>Get Plan</button>
            </motion.div>
            <motion.div
            initial={{ opacity:0, y:-50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
            className='w-1/3 flex flex-col max-md:gap-4 bg-[#010080] max-md:hover:shadow-2xl max-md:hover:transition max-md:hover:duration-500 items-center justify-center text-center group hover:scale-110 hover:transition-transform hover:border-2 hover:duration-500 hover:border-[#6C6CAB]'>
              <div className='relative w-full h-[90px] max-md:h-[45px] bg-[#C7DFE7] text-sm max-md:text-xs'><span className='absolute inset-0 flex items-center justify-center text-[8px] md:text-[23px] font-medium'>Standard</span></div>
              <p className='text-center text-sm max-md:text-[10px] text-white p-3 max-md:p-0'>Up to 7% Discount</p>
              <p className='relative w-full text-center m-5 max-md:m-0 max-md:mt-5 pb-3 max-md:pb-0'><span className="relative z-10 text-white">₦12,000</span>
  </p>
              <button className='p-3 w-30 max-md:w-20  h-10 bg-white text-sm max-md:text-[10px] max-md:text-xs rounded-lg mx-auto text-center max-md:mb-7 mb-12 max-md:hover:text-white hover:text-white hover:bg-[#6C6CAB]'>Get Plan</button>
            </motion.div>
            <motion.div
            initial={{ opacity:0, y:-50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
            className='w-1/3 flex flex-col max-md:gap-4 bg-[#010080] max-md:hover:shadow-2xl max-md:hover:transition max-md:hover:duration-500 items-center justify-center text-center group hover:scale-110 hover:transition-transform hover:border-2 hover:duration-500 hover:border-[#6C6CAB]'>
              <div className='relative w-full h-[90px] max-md:h-[45px] bg-[#C7DFE7] text-sm max-md:text-xs'><span className='absolute inset-0 flex items-center justify-center text-[8px] md:text-[23px] font-medium'>Premium</span></div>
              <p className='text-center text-sm max-md:text-[10px] text-white p-3 max-md:p-0'>Up to 10% Discount</p>
              <p className='relative w-full text-center m-5 max-md:m-0 max-md:mt-5 pb-3 max-md:pb-0'><span className="relative z-10 text-white">₦25,000</span>
  </p>
              <button className='p-3 w-30 max-md:w-20  h-10 bg-white text-sm max-md:text-[10px] max-md:text-xs rounded-lg mx-auto text-center max-md:mb-7 mb-12 max-md:hover:text-white hover:text-white hover:bg-[#6C6CAB]'>Get Plan</button>
            </motion.div>
      </div>
      </div>
      <motion.div
      initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
      className='text-center text-sm text-neutral-700 p-5'>Includes 7-day free trial. Cancel anytime.</motion.div>
      
        <div className="flex justify-center items-center w-full p-5">
        <button
        className='w-[175px] h-[49px] md:h-[85px] md:w-[652px] bg-red-500 text-white hover:text-red-500 hover:bg-white hover:border hover:border-red-500 justify-center items-center rounded-2xl mb-6'>
          Continue for Free
        </button>
      </div>
      </motion.div>
    </section>
    </>
  )
}

export default Subscribeservices