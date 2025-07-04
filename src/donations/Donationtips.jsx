import React from 'react'
import { motion} from 'framer-motion'

const Donationtips = () => {
  return (
    <>
    <section className='bg-[#79AEBE] p-5 relative max-md:mt-10'>
        <motion.div
        initial={{ opacity:0, x:-50 }}
        whileInView={{ opacity:1, x:0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.2,
          damping: 20,
        }}
        className='flex flex-row justify-between pt-10 pl-10 md:pt-15'>
            <h1 className='min-lg:hidden text-xl text-white'>ThriveWell Donation Tips</h1>
            <img src="/donationslight.png" className='absolute top-10 right-10 lg:right-80 w-16' alt="" />
        </motion.div>
        <div className='flex flex-row-reverse lg:flex-row'>
            <motion.div
            initial={{ opacity:0, scale:0.5 }}
        whileInView={{ opacity:1, scale:1.0}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.3,
          damping: 20,
        }}
            className='flex flex-row w-[40%] xl:pl-5 pb-10'>
                <img src='/donationsgirl.png' className='max-lg:hidden w-[220px] h-[400px]'/>
                <img src='/donationsboy.png' className='lg:-ml-[30px] mt-[100px] max-lg:mt-[45px] w-[220px] h-[500px] md:h-[400px] max-md:object-cover max-md:rounded-3xl max-md:border max-lg:mx-auto'/>
            </motion.div>
            <motion.div
                        initial={{ opacity:0, x:50 }}
                whileInView={{ opacity:1, x:0}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4,
                  damping: 20,
                }}
                        className='w-[60%] flex flex-col gap-5 pr-5 min-xl:pr-30 md:mt-20 max-md:pt-15'>
                        <div className='flex flex-row max-md:gap-2 items-start justify-start md:mr-auto'>
                            <div className='w-[6%]'><img src='/Heart.png' className='md:w-6 md:h-6'/></div>
                            <div className='w-[94%] flex flex-col gap-3'>
                            <h1 className='text-sm md:text-base xl:text-xl text-white font-semibold'>Choose a cause That Matters to You</h1>
                        <p className='text-xs md:text-sm xl:text-base text-white font-light'>Whether it’s cancer care, maternal health, or mental health, direct your donation where it can make the biggest difference.</p>
                            </div>
                        </div>
                        <div className='flex flex-row max-md:gap-2'>
                            <div className='w-[6%]'><img src='/Heart.png' className='md:w-6 md:h-6'/></div>
                            <div className='w-[94%] flex flex-col gap-3'>
                            <h1 className='text-sm md:text-base xl:text-xl text-white font-semibold'>Give in Multiple Ways</h1>
                        <p className='text-xs md:text-sm xl:text-base text-white font-light'>Consider one-time gifts, monthly contributions, or corporate matching programs to maximize your impact.</p>
                            </div>
                        </div>
                        <div className='flex flex-row max-md:gap-2'>
                            <div className='w-[6%]'><img src='/Heart.png' className='md:w-6 md:h-6'/></div>
                            <div className='w-[94%] flex flex-col gap-3'>
                            <h1 className='text-sm md:text-base xl:text-xl text-white font-semibold'>Support Medical Supply Donations</h1>
                        <p className='text-xs md:text-sm xl:text-base text-white font-light'>Many hospitals and clinics benefit from in-kind donations such as PPE, medical devices, and essential medications.</p>
                            </div>
                        </div>
                        <div className='flex flex-row max-md:gap-2'>
                            <div className='w-[6%]'><img src='/Heart.png' className='md:w-6 md:h-6'/></div>
                            <div className='w-[94%] flex flex-col gap-3'>
                            <h1 className='text-sm md:text-base xl:text-xl text-white font-semibold'>Encourage Community Giving</h1>
                        <p className='text-xs md:text-sm xl:text-base text-white font-light'>Fundraising, peer-to-peer campaigns, and social media sharing can amplify support for healthcare initiatives.</p>
                            </div>
                        </div>
                        </motion.div>
        </div>
    </section>
    </>
  )
}

export default Donationtips