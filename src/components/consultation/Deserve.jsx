import React from 'react'
import deserve from '/deserve.png'

const Deserve = () => {
  return (
      <>
        <section>
                  <div className='flex flex-row-reverse max-md:flex-col min-md:h-[50vh] gap-4 mt-30 mb-30'>
                  <div className='w-full md:w-[45%] flex flex-col p-5 mt-20 gap-2 lg:gap-5'>
                  <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold max-md:text-center font-stretch-ultra-expanded text-[#313030]'>You Deserve to be Physically Healthy</h1>
            <p className='text-sm lg:text-[17px] max-md:hidden font-stretch-100% text-[#626262]'>Get instant medical advice, book appointments, and receive prescriptions from certified doctors.</p>
            <button className='max-md:hidden mt-4 h-[40px] w-[170px] rounded-2xl bg-[#010080] hover:bg-indigo-950 text-white'>Login</button>
                  </div>
                  <div className='w-[55%] max-md:w-full flex justify-end items-end'>
                  <div
                                    className="w-full min-h-[350px] md:mt-30"
                                    style={{
                                      backgroundImage: `url(${deserve})`,
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      height: '350px',
                                      
                                    }}
                                  >
                  </div>
                  </div>
                  <p className='w-full mt-10 p-5 text-sm text-[#626262] min-md:hidden text-center'>Get instant medical advice, book appointments, and receive prescriptions from certified doctors.</p>
                  </div>
                </section>
        </>
  )
}

export default Deserve