import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const Donate = () => {
  return (
      <>
    <motion.div
    initial={{ opacity:0, x:-100 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.5,
      damping: 20,
    }}
    className='w-[90%] mx-auto p-12 max-sm:p-7 bg-[#D7D7D7] flex flex-row max-sm:flex-col rounded-lg'>
      <h1 className='text-[#0170FF] min-md:text-4xl max-md:text-2xl w-1/2 max-sm:w-full p-5'>Any amount helps take care of one patient, Every Penny Counts...</h1>
      <div className='flex min-sm:m-auto max-sm:pl-30'>
           <Link to="/donations"><button className='justify-center items-center text-center m-auto bg-indigo-900 hover:bg-indigo-950 text-white px-5 w-[220px] h-[75px] rounded-2xl max-md:w-[200px] max-md:h-[55px] '>
      Donate
            </button></Link>
      </div>
    </motion.div>
    </>
  )
}

export default Donate