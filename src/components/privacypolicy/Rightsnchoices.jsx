import React from 'react'
import { GiCheckMark } from 'react-icons/gi';

const Rightsnchoices = () => {
  return (
    <>
    <div className='mt-20 bg-neutral-700 p-5 md:p-7 lg:p-10'>
    <div className='w-full text-center text-blue-100 font-bold text-base md:text-lg xl:text-[30px]'>User Rights and Choices</div>
    <div className='flex flex-row p-5 gap-15'>
        <div className='w-1/2 flex flex-col text-sm'>At THRIVE WELL, we value your privacy and are committed to ensuring you have control over your personal information. This section outlines your rights and the choices you have when using our services
        </div>

        <div className='w-1/2 flex flex-col text-sm'>
        <div className='ml-auto flex flex-col justify-end'>
            You have the right to:
           <p> <span className='inline-block'><GiCheckMark/></span>Access, update or delete your personal information.</p>
            <p> <span className='inline-block'><GiCheckMark/></span>Opt-out of non-essential data collection and marketing communications.</p>
            <p> <span className='inline-block'><GiCheckMark/></span>Request a copy of the information we store about you.</p>
        </div>
        
        </div>
    </div>
    <div className='flex flex-row w-full p-5'>
        <div className='w-1/2'><button className='mt-8 h-[47px] w-[150px] rounded-2xl bg-[#0e0e30] hover:bg-indigo-950 text-white text-center text-sm'>I Disgree</button></div>
        <div className='w-1/2 flex justify-end'><button className='mt-8 h-[47px] w-[150px] rounded-2xl bg-[#0e0e30] hover:bg-indigo-950 text-white text-center text-sm'>I Disgree</button></div>
    </div>
    </div>
    </>
  )
}

export default Rightsnchoices