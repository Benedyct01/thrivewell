import React, { useState, useEffect, useRef } from 'react';
import { reviews } from '../data'
import { motion } from 'framer-motion'


const Clientsreviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      } else if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Manual tab click
  const handleTabClick = (idx) => {
    setActiveIndex(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
  };

  return (
    <motion.div 
    initial={{ opacity:0, scale:0.8 }}
        whileInView={{ opacity:1, scale:1}}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 0.7,
          damping: 20,
        }}
    className="flex flex-col md:flex-row w-full min-h-[200px] bg-white mt-3 md:mt-16">
      {/* Left Section: Review Paragraph */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-5 md:p-10 min-h-[300px] max-md:text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-[#313030] flex max-md:text-center max-md:mx-auto tracking-wide">Clients Reviews</h2>
        <h3 className='text-base mb-3 text-[#313030] font-extralight'>Our patients trust us for fast, reliable, and compassionate healthcare. From seamless doctor consultations to hassle-free appointment booking, we prioritize your well-being. With top-rated medical experts, secure services, and round-the-clock support, we make healthcare simple and stress-free. Join thousands of satisfied clients who choose us for better health everyday!”</h3>
        <p className="text-lg text-gray-700 transition-all duration-500 min-h-[50px] font-semibold mt-4">
          "{reviews[activeIndex].text}"
        </p>
      </div>

      {/* Right Section: Tabs */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
        <div className="flex flex-col gap-6 transition-all duration-500 w-full items-center">
          {reviews.map((review, idx) => (
            <button
              key={idx}
              onClick={() => handleTabClick(idx)}
              className={`w-[80%] h-[90px] rounded-xl shadow-md flex flex-col justify-center px-6 transition-all duration-300
                ${activeIndex === idx
                  ? "bg-[#D7D7D7] text-[#313030] scale-105 w-[400px] lg:w-[460px]"
                  : "bg-[#D7D7D7] text-[#313030] w-[300px] lg:w-[320px]"
                }`}
              style={{
                zIndex: activeIndex === idx ? 10 : 1,
                opacity: activeIndex === idx ? 1 : 0.7,
              }}
              tabIndex={0}
            >
                <div className='flex flex-row'>
                    <img src={review.img} alt="" className='w-9 md:w-12 h-9 md:h-12' />
                    <div className='flex flex-col ml-3'>
                        <h1 className='font-semibold text-lg'>{review.name}</h1>
                        <p className='text-sm'>{review.role}</p>
                    </div>
                    <img src="/reviewquote.png" alt="" className='ml-auto px-5 w-14  h-4' />
                </div>
              
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Clientsreviews;