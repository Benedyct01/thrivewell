import React from 'react'
import consultationhero from '/consultationhero.png';

const Hero = () => {
  return (
    <>
        <section>
          <div className='flex flex-row max-md:flex-col bg-[#C7DFE7] min-h-[100svh]'>
          <div className='max-sm:w-[80%] md:w-[45%] lg:w-[50%] flex flex-col max-sm:p-10 p-20 mt-20 min-lg:min-h-[100svh] min-lg:gap-5 min-xl:p-25 gap-3'>
          <h1 className='text-[2.5rem] max-sm:text-[20px] max-sm:leading-normal leading-15 text-[#313030]'>Trusted Experts Committed to Your Health</h1>
    <p className='text-sm md:text-[18px] text-[#313030]'>Tired of long hospital waits? Online healthcare consultations offer a faster alternative.</p>
    <button className='min-md:hidden mt-4 h-[50px] w-[190px] rounded-2xl inset-0 bg-[#010080] hover:bg-indigo-950 text-white'>Login</button>
    
          </div>
          <div className='w-[55%] max-lg:w-full md:relative flex justify-end items-end'>
          <div
                            className="w-full min-h-[350px] md:absolute md:top-[20%]"
                            style={{
                              backgroundImage: `url(${consultationhero})`,
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              height: '350px',
                              
                            }}
                          >
          </div>
          </div>
          </div>
        </section>
        </>
  )
}

export default Hero