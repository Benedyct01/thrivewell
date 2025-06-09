import React from 'react'
import homehero from '/homehero.png'
import { IoSearchSharp } from "react-icons/io5";


const Hero = () => {
  return (
    <>
    <section>
      <div className='flex flex-row max-lg:flex-col'>
      <div className='max-sm:w-[80%] md:w-[90%] lg:w-[50%] flex flex-col max-sm:p-10 p-20 mt-20 min-lg:h-[100vh] min-lg:gap-5 min-xl:p-25 gap-3'>
      <div className='flex flex-row gap-3 items-center'>
                  <div className="h-px size-2 bg-neutral-300 w-12">
                  </div>
                    <p className=' text-sm tracking-widest text-black font-semibold'>We are here for you</p>
                </div>
      <h1 className='text-[2.5rem] max-sm:text-[20px] max-sm:leading-normal leading-15'>Empower people living
with chronic illness to thrive <span className='max-lg:hidden'>and live better</span></h1>
<p className='text-sm lg:text-[17px]'>Diabities or Hypertention doesn’t have to be the end 
of you. You can conquire it with a little knowledge and skills</p>
<button className='max-md:hidden mt-4 h-[50px] w-[190px] rounded-2xl inset-0 bg-[#010080] hover:bg-indigo-950 text-white'>Login</button>
<button className='min-md:hidden h-[47px] w-[150px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>Get Started</button>
      </div>
      <div className='w-1/2 max-lg:w-full'>
      <div
                        className="relative w-full h-screen max-md:h-[50vh]"
                        style={{
                          backgroundImage: `url(${homehero})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          
                        }}
                      >
                        <div className='absolute bottom-3 right-5 w-[250px] h-[200px] lg:w-[300px] lg:h-[250px] bg-white p-3 lg:p-5 flex flex-col gap-2 lg:gap-5 rounded-3xl'>
                          <p className='text-semibold'>Available Doctors</p>
                          <div className='flex flex-row gap-2 lg:gap-5'>
                            <img src='/michael.png' />
                            <div className='flex flex-col ml-3'>
                              <p className='text-sm'>Michael Brown</p>
                              <p className='text-xs'>Specialty Doctors</p>
                            </div>
                          </div>
                          <div className='flex flex-row gap-2 lg:gap-5'>
                            <img src='/glory.png' />
                            <div className='flex flex-col ml-3'>
                              <p className='text-sm'>Glory George</p>
                              <p className='text-xs'>Medical Doctor</p>
                            </div>
                          </div>
                          <form action="sumbit"><div className='relative max-lg:pt-4'><input type="text" className='w-full p-1 lg:p-3 bg-white py-2 lg:py-4 px-8 lg:px-10 rounded-full outline-none ring' placeholder='Search Doctor' /><div className='w-5 lg:w-9 h-5 lg:h-9 rounded-md absolute bottom-2 left-3 flex justify-center items-center'><IoSearchSharp className='text-[#313030]' /></div></div></form>
                        </div>
      </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Hero