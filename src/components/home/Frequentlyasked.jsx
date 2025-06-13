import React, { useState } from 'react'
import { questions } from '../data'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from 'motion/react'


export default function Frequentlyasked() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx)
  }
  return (
    <>
    <section>
      <div className='w-full mt-30 bg-[#D7D7D7]/60 max-md:bg-white'>
      <div className='flex flex-col justify-center items-center'>
            <motion.h1
            initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.2,
      damping: 20,
    }}
            className='font-semibold text-4xl max-md:text-2xl p-9 text-indigo-900'>Frequently asked questions</motion.h1>
            <motion.p
            initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.6,
      damping: 20,
    }}
            className='text-neutral-700'>Have Questions? We're here to help</motion.p>
            <motion.div
            initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.8,
      damping: 20,
    }}
            className="w-[90%] p-7">
              {questions.map((item, idx) => (
                <div key={idx} className="overflow-hidden mt-6">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 bg-[#D9D9D9] hover:bg-[#ABA7B3] font-semibold transition text-left text-sm md:text-base"
                    onClick={() => toggle(idx)}
                  >
                    <span className='text-[#313030]'>{item.q}</span>
                    <span className="ml-4 text-[#D1001F]">{openIndex === idx ? <MdKeyboardArrowRight/> : <MdKeyboardArrowDown/>}</span>
                  </button>
                  <div
                    className="transition-all duration-900 ease-in-out"
                    style={{
                      maxHeight: openIndex === idx ? '500px' : '0px',
                      opacity: openIndex === idx ? 1 : 0,
                      overflow: 'hidden',
                    }}
                  >
                    <div className="px-6 py-4 bg-white text-gray-700">
                      {item.a}
                    </div>
                    </div>
                </div>
              ))}
            </motion.div>
      </div>

              <motion.div
              initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.9,
      damping: 20,
    }}
              className='w-full mt-20 flex flex-col justify-center items-center'>
                  <div className='flex flex-row'>
                        <div className='w-8 h-8 rounded-full'><img src='/frequentlypersonone.png'/></div>
                        <div className='w-8 h-8 rounded-full'><img src='/frequentlypersontwo.png'/></div>
                        <div className='w-8 h-8 rounded-full'><img src='/frequentlypersonthree.png'/></div>
                  </div>
      <h1 className='font-semibold text-4xl max-md:text-2xl p-2 text-neutral-900'>Still have questions?</h1>
            <p className='text-neutral-700 text-sm font-medium'>Can't find the answer you're looking for? Ask now.</p>
            </motion.div>

              <form>
            <motion.div
            initial={{ opacity:0, scale:0.6 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 1.0,
      damping: 20,
    }}
            className='w-[70%] max-md:w-[100%] max-md:p-6 flex flex-wrap max-md:flex-col mb-20 justify-center items-center mx-auto'>
                  
                  <div className='w-1/2 max-md:w-full flex flex-col pr-6 max-md:pr-0'>
              <label className="block text-neutral-800 font-medium mb-1 text-sm py-2">Name</label>
              <input
                type="text"
                className="w-[100%] px-4 py-3 rounded-lg border border-[#313030] focus:bg-[#E2E8EE] outline-none font-sans"
                placeholder="Your Name"
                required
              />
            </div>
                 <div className='w-1/2 max-md:w-full flex flex-col pl-6 max-md:pl-0'>
              <label className="block text-neutral-800 font-medium mb-1 text-sm py-2">Email</label>
              <input
                type="text"
                className="w-[100%] px-4 py-3 border border-[#313030] focus:bg-[#E2E8EE] outline-none font-sans rounded-lg"
                placeholder="Email@email.com"
                required
              />
            </div> 
            <div className='relative w-full flex flex-col mb-20 max-md:mb-2'>
              <label className="block text-neutral-800 font-medium mb-1 text-sm py-2">Question</label>
              <textarea
                rows={4}
                className="relative w-full px-4 py-3 rounded-2xl border border-[#313030] focus:bg-[#E2E8EE] outline-none font-sans"
                placeholder="Enter your question"
                required
              />
              <button
              type="submit"
              className="absolute bottom-2 right-3 bg-indigo-700 hover:bg-indigo-900 min-md:bg-transparent text-white font-bold min-md:text-neutral-700 min-md:hover:text-white py-3 rounded-lg shadow-md min-md:border transition font-serif p-3 text-sm"
            >
              Submit
            </button>
            </div>
            
            </motion.div> 
            </form>
            
      </div>
    </section>
    </>
  )
}
