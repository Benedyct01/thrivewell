import React from 'react'
import { motion } from 'motion/react'

const Supportthrivewell = () => {
  return (
    <>
    <section>
        <div className='flex flex-col md:flex-row p-5 md:p-7 mt-20 gap-11'>
            <div className='flex-col w-1/2 max-md:w-full'>
                <div className='flex flex-row max-md:ml-9'>
                    <img src="/donationsline.png" className='w-15 h-5' alt="" />
                    <p className='font-semibold text-sm ml-3'><span className='max-md:hidden'>Let's Help</span><span className='md:hidden'>We Love You</span></p>
                </div>
                <h1 className='mt-5 text-xl xl:text-3xl text-bold max-md:text-center max-md:text-2xl max-md:font-bold'>Support Thrivewell: <br/> Transform Lives Through <br/>Healthcare Donations</h1>
                <p className='text-sm font-medium mt-5 max-md:hidden'>At Thrive Well, we believe that access to quality healthcare is a fundamental right, not a privilege. Every day, countless individuals struggle to afford life-saving treatments, essential medications, and basic medical care. With your support, we can bridge this gap and bring hope to those in need.</p>
                <div className='grid grid-cols-2 mt-5 gap-4 max-md:hidden'>
                  <div className='flex flex-row mt-2'>
                    <img src="/phone.png" className='md:w-5 lg:w-10 md:h-5 lg:h-10 inline-block' alt="" />
                    <div className='flex-col'>
                      <p>Phone</p>
                      <p className='text-xs'>+234-8011135610</p>
                    </div>
                  </div>
                  <div className='flex flex-row mt-2'>
                    <img src="/search.png" className='md:w-5 lg:w-10 md:h-5 lg:h-10 inline-block' alt="" />
                    <div className='flex-col'>
                      <p>Email</p>
                      <p className='text-[8px] md:text-xs'>info@thrivewell.io</p>
                    </div>
                  </div>
                  <div className='flex flex-row mt-9'>
                    <img src="/website.png" className='md:w-5 lg:w-10 md:h-5 lg:h-10 inline-block' alt="" />
                    <div className='flex-col'>
                      <p>Website</p>
                      <p className='text-[8px] md:text-xs'>www.thrivewell.com</p>
                    </div>
                  </div>
                  <div className='flex flex-row mt-9'>
                    <img src="/address.png" className='md:w-5 lg:w-10 md:h-5 lg:h-10 inline-block' alt="" />
                    <div className='flex-col'>
                      <p>Address</p>
                      <p className='text-[8px] md:text-xs'><span className='max-xl:hidden'>99 Freedom Way, Lekki Lagos</span><span className='xl:hidden'>99 Freedom Way</span></p>
                    </div>
                  </div>
                </div>
            </div>
            <motion.div
      initial={{ opacity:0, x:100 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
      className="w-1/2 max-md:w-full  flex items-center justify-center mt-10">
        <form className="w-full p-8 max-w-xl bg-[#D7D7D7] rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#FFFFFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#FFFFFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              placeholder="Phone No"
              className="bg-[#FFFFFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <div className="relative">
              <input
                type="number"
                placeholder="Donation Amount"
                className="bg-[#FFFFFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full cursor-pointer"
                required
              />
            </div>
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-[#FFFFFF] px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className='flex justify-center items-center'>
            <button
            type="submit"
            className="justify-end items-end w-full bg-indigo-900 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition text-sm"
          >
            DONATE HERE
          </button>
          </div>
          
        </form>
      </motion.div>
        </div>
    </section>
    </>
  )
}

export default Supportthrivewell