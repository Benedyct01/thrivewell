import React from 'react'
import aboutbgone from '/aboutbgone.png';
import aboutbgtwo from '/aboutbgtwo.png';
import { motion } from 'framer-motion'

const Abouthrivewell = () => {
  return (
    <>
    <section>
        <div className='flex flex-col-reverse md:flex-row mt-20 gap-5 max-md:flex max-md:justify-center max-md:items-center max-md:p-5'>
            <motion.div
            initial={{ opacity:0, x:-50 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
            className='w-full md:w-[53%] flex justify-center items-center md:items-start md:justify-start rounded-3xl max-md:p-5' 
                style={{
                        backgroundImage: `url(${aboutbgone})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '400px',
                        }}>
        </motion.div>
        <motion.div
        initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
        className='w-full md:w-[47%] flex flex-col-reverse md:flex-col p-5 md:p-9 max-md:flex max-md:justify-center max-md:items-center'>
        <button className='md:hidden h-[47px] w-[150px] rounded-2xl mt-4 md:mt-5 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm max-md:flex max-md:justify-center max-md:items-center'>Get Started</button>
        <p className='text-sm max-md:text-center'>At ThriveWell, we are committed to helping individuals with 
diabetes and hypertension take control of their health through personalized 
tools, expert resources, and a strong support community. Our platform provides easy access to health tracking, virtual consultations, educational content, and a space to connect with others on a similar journey. With a patient-first approach, we empower you to live healthier, happier, and stress-free.</p>
<button className='max-md:hidden h-[47px] w-[170px] rounded-2xl mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>Get Started</button>
<p className='text-neutral-700 text-lg md:text-4xl mt-1 md:mt-5 font-semibold max-md:text-center'>About Thrivewell</p>
        </motion.div>
        </div>

        <div className='flex flex-col md:flex-row mt-2 md:mt-9 max-md:p-5'>
        <motion.div
        initial={{ opacity:0, y:50 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
        className='w-full md:w-[47%] flex flex-col p-5 md:p-11'>
        <p className='text-neutral-700 text-lg md:text-4xl mt-5 font-semibold max-md:text-center'>Mission</p>
        <p className='text-neutral-700 text-sm max-md:text-center md:mt-4'>At ThriveWell, our mission is to empower individuals living with chronic illnesses by providing accessible healthcare solutions, expert guidance, and a supportive community. We are dedicated to improving health outcomes through technology, education, and personalized care, ensuring that every individual can manage their condition with confidence and ease.</p>
        <p className='text-neutral-700 text-lg md:text-4xl font-semibold max-md:text-center max-md:mt-3 md:mt-4'>Vision</p>
        <p className='text-neutral-700 text-sm max-md:text-center md:mt-4'>Our vision is to revolutionize chronic disease management by creating a world where individuals with diabetes and hypertension have the tools, knowledge, and support needed to thrive. We aim to bridge healthcare gaps by making affordable, patient-centered solutions available to everyone, anytime, anywhere.</p>
<button className='max-md:hidden h-[47px] w-[170px] rounded-2xl  mt-3 bg-[#010080] hover:bg-indigo-950 text-white text-center text-sm'>About Us</button>
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
        className='w-full md:w-[53%] flex justify-center items-center md:justify-end md:items-end' 
                style={{
                        backgroundImage: `url(${aboutbgtwo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '400px',
                        }}>
        </motion.div>
        </div>
    </section>
    </>
  )
}

export default Abouthrivewell