import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='mb-15'>
        <div className='w-full min-h-[100svh] relative'>
            <img src="/privacypolicyhero.png" alt="privacypolicy" className='object-cover bg-no-repeat bg-center w-full min-h-[100svh]'/>
            <img src='/privacypolicyblob.png' className='absolute top-0 right-0 z-1 h-[40%] max-lg:hidden'/>
            <span className='absolute top-[50vh] text-white text-7xl font-bold inset-0 w-full text-center'>Privacy Policy</span>
        </div>
    </section>
    </>
  )
}

export default Hero