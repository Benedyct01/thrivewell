import React from 'react'
import { resources } from '../data'

const Articles = () => {
  return (
    <>
    <section>
      <div className='mt-20 p-5 md:p-15 text-indigo-900 font-medium text-4xl max-md:text-2xl'>Articles and Resources</div>
      <div className='mt-5 px-5 md:px-15 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
  {resources.map((slide) => (
  <div
  className='flex flex-col bg-[#D7D7D7] p-6 max-md:p-3 rounded-lg shadow-md gap-4 max-sm:text-sm '>
      <img src={slide.icon} className='w-[30px] h-[30px]'/>
    <h2 className='text-xl max-md:text-base max-sm:text-sm font-semibold mb-4'>{slide.title}</h2>
    <p className='justify-center pb-6'>{slide.detail}</p>
  </div>
  ))}
</div>
    </section>
    </>
  )
}

export default Articles