import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from 'framer-motion'



const Appointment = () => {
      const [showDropdown, setShowDropdown] = useState(false)
  const [service, setService] = useState('')

  const services = [
    "General Consultation",
    "Nutrition & Wellness",
    "Virtual Care"
  ]

  const handleServiceSelect = (option) => {
    setService(option)
    setShowDropdown(false)
  }
  return (
    <section className="w-full mt-20 flex flex-col lg:flex-row items-stretch bg-[#79AEBE]">
      {/* Left: Image */}
      <motion.div
      initial={{ opacity:0, scale:0.6 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
      className="w-full lg:w-[40%] flex items-start justify-start">
        <img
          src="/appointment.png"
          alt="Appointment"
          className="w-full object-contain h-[450px]"
        />
      </motion.div>
      {/* Right: Form */}
      <motion.div
      initial={{ opacity:0, x:100 }}
    whileInView={{ opacity:1, x:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.4,
      damping: 20,
    }}
      className="w-full lg:w-[60%] pt-10 flex items-center justify-center p-8">
        <form className="w-full max-w-xl">
          <h2 className="text-2xl font-light mb-6 text-neutral-900 text-center">Fix an Appointment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#D9D9D9] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#D9D9D9] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-[#D9D9D9] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Type of Service"
                className="bg-[#D9D9D9] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full cursor-pointer"
                value={service}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                onChange={() => {}}
                readOnly
                required
              />
                                <span className='absolute right-3 bottom-3 text-2xl text-black z-999 cursor-pointer' onClick={() => setShowDropdown(!showDropdown)}><MdKeyboardArrowDown/></span>

              {showDropdown && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow z-10">
                  {services.map((option, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                      onMouseDown={() => handleServiceSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <textarea
            placeholder="Message"
            rows={2}
            className="w-full bg-[#D9D9D9] px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className='flex justify-end items-end'>
            <button
            type="submit"
            className="justify-end items-end w-[150px] h-[47px] md:w-[170px] md:h-[47px] bg-indigo-900 hover:bg-indigo-700 text-white font-medium py-3 rounded-2xl transition"
          >
            Book Now
          </button>
          </div>
          
        </form>
      </motion.div>
    </section>
  )
}

export default Appointment