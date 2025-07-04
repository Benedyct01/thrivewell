import React, { useEffect, useState } from 'react'
import homehero from '/homehero.png'
import homeheromobile from '/homeheromobile.png'
import { motion } from "framer-motion"
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  
  return (
    <>
    <motion.section
    initial={{ opacity:0, x:-50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
      }}
    >
      <div className='flex flex-row max-lg:flex-col'>
      <div className='max-sm:w-[80%] md:w-[90%] lg:w-[50%] flex flex-col max-sm:p-10 p-20 mt-20 min-lg:min-h-[100svh] min-lg:gap-5 min-xl:p-25 gap-3'>
      <div className='flex flex-row gap-3 items-center'>
                  <div className="h-px size-2 bg-neutral-300 w-12">
                  </div>
                    <p className=' text-sm tracking-widest text-black font-semibold'>We are here for you</p>
                </div>
      <h1 className='text-[2.5rem] max-sm:text-[20px] max-sm:leading-normal leading-15'>Empower people living
with chronic illness to thrive <span className='max-lg:hidden'>and live better</span></h1>
<p className='text-sm lg:text-[17px]'>Diabities or Hypertention doesn’t have to be the end 
of you. You can conquire it with a little knowledge and skills</p>
<button className='max-md:hidden mt-4 h-[47px] w-[170px] rounded-2xl inset-0 bg-[#010080] hover:bg-indigo-950 text-white'>Login</button>
<button className='min-md:hidden h-[47px] w-[150px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>Get Started</button>
      </div>
      <div className='max-md:hidden relative w-1/2 max-lg:w-full min-h-[70svh] md:min-h-[100svh]'>
      <div
                        className="w-full min-h-[70svh] md:min-h-[100svh]"
                        style={{
                          backgroundImage: `url(${homehero})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          
                        }}
                      >
                      <div className='absolute bottom-15 lg:bottom-25 right-3 p-5 bg-white flex flex-col gap-6 rounded-xl'>
                        <p>Available Doctors</p>
                        <div className='flex flex-row'>
                          <img src="/michael.png" alt="" />
                          <div className='flex flex-col ml-4'>
                            <p className='text-sm'>Michael Brown</p>
                            <p className='text-xs'>Specialty Doctors</p>
                          </div>
                        </div>
                        <div className='flex flex-row'>
                          <img src="/glory.png" alt="" />
                          <div className='flex flex-col ml-4'>
                            <p className='text-sm'>Glory George</p>
                            <p className='text-xs'>Medical Director</p>
                          </div>
                        </div>
                        <form action="sumbit" className='relative border rounded-full'><button className='absolute left-3 top-1 inline-block'><IoIosSearch className='w-7 h-7'/></button><input type='text' className='h-9 mx-2 px-9 max-md:w-[180px] w-[220px] max-md:text-xs outline-none' placeholder='Search for Doctor'/></form>
                      </div>
      </div>
      </div>
      <div
                        className="relative min-md:hidden w-full min-h-[70svh] md:min-h-[100svh]"
                        style={{
                          backgroundImage: `url(${homeheromobile})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          
                        }}
                      >
                      <div className='absolute bottom-10 md:bottom-15 lg:bottom-25 right-3 p-3 bg-white flex flex-col gap-6 rounded-xl'>
                        <p>Available Doctors</p>
                        <div className='flex flex-row'>
                          <img src="/michael.png" alt="" />
                          <div className='flex flex-col ml-4'>
                            <p className='text-sm'>Michael Brown</p>
                            <p className='text-xs'>Specialty Doctors</p>
                          </div>
                        </div>
                        <div className='flex flex-row'>
                          <img src="/glory.png" alt="" />
                          <div className='flex flex-col ml-4'>
                            <p className='text-sm'>Glory George</p>
                            <p className='text-xs'>Medical Director</p>
                          </div>
                        </div>
                        <form action="sumbit" className='relative border rounded-full'><div className='absolute left-3 top-2 md:top-1 inline-block'><IoIosSearch className='max-md:w-4 max-md:h-4 w-7 h-7'/></div><input type='text' className='h-8 mx-2 px-6 md:px-9 max-md:w-[150px] w-[220px] max-md:text-xs' placeholder='Search for Doctor'/></form>
                      </div>
      </div>
      </div>
    </motion.section>
    </>
  )
}

export default Hero