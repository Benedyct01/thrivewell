import React from 'react'
import homehero from '/homehero.png'
const Hero = () => {
  return (
    <>
    <section>
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
<button className='max-md:hidden mt-4 h-[50px] w-[190px] rounded-2xl inset-0 bg-[#010080] hover:bg-indigo-950 text-white'>Login</button>
<button className='min-md:hidden h-[47px] w-[150px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>Get Started</button>
      </div>
      <div className='w-1/2 max-lg:w-full'>
      <div
                        className=" w-full min-h-[100svh] max-md:h-[50vh]"
                        style={{
                          backgroundImage: `url(${homehero})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          
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