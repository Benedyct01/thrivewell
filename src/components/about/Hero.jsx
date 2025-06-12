import React from 'react'
import abouthero from '/abouthero.png';

const Hero = () => {
  return (
    <>
    <section>
    <div className='relative w-full min-h-[100svh]' 
    style={{
            backgroundImage: `url(${abouthero})`,
            backgroundSize: 'cover',
            backgroundPosition: '40% 40%',
            backgroundRepeat: 'no-repeat',
            }}>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-indigo-900 text-2xl md:text-4xl lg:text-5xl font-bold lg:font-extrabold px-6 py-4">
                    <h1 className='font-semibold text-center'>Bridging the gap between Patients and Donors</h1>
                  </span>
                </div>
    </div>
    </section>
    </>
  )
}

export default Hero