import React, { useState, useEffect, useRef } from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data';
import { motion } from 'motion/react'



const Testimonial = () => {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

   useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  

  const getCarouselStyle = (idx) => {
    const total = testimonials.length;
    const angle = (360 / total) * (idx - active);
    return {
      transform: `rotateY(${angle}deg) translateZ(220px) translateY(120px)`,
      transition: 'transform 0.6s cubic-bezier(.4,2,.6,1)'
    };
  };

  return (
    <motion.div
    initial={{ opacity:0, scale:0.6 }}
    whileInView={{ opacity:1, scale:1.0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.3,
      damping: 20,
    }}
    className="relative w-full flex flex-col items-center min-h-[800px] max-md:min-h-[750px] mt-20">
      <div className='p-5 w-full text-center font-light text-black min-lg:text-3xl'>Our <span className='text-indigo-900'>Testimonials</span></div>
      <div className='p-5 w-full text-center font-light text-black min-lg:text-2xl'>Trusted Worldwide great care giving</div>
      <div className='flex m-3 w-20 h-20 rounded-full items-center justify-center inset-0 text-white bg-indigo-900 text-center text-3xl'><div className='text-center justify-center items-center'><FaQuoteLeft/></div></div>
      <h2 className="text-2xl min-lg:text-4xl font-bold mb-8 text-indigo-900 p-4">What Our Customers Are Saying...</h2>
      <div className="max-w-xl text-center">
        <p className="p-4 text-base min-lg:text-xl font-extralight text-gray-700">"{testimonials[active].quote}"</p>
      </div>


      <div className="w-[320px] h-[120px] perspective-[500px] mx-auto mb-8">
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s cubic-bezier(.4,2,.6,1)'
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              style={getCarouselStyle(idx)}
              className={`absolute w-[140px] h-[140px] rounded-full shadow-lg border-4 border-white bg-white flex items-center justify-center overflow-hidden transition-all duration-300 ${idx === active
        ? 'ring-4 ring-indigo-400 scale-50 z-10 my-0'
        : 'opacity-70 scale-40'
      }`}
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 max-w-xl text-center text-base min-lg:text-xl m-4 text-gray-700">
        <span className="block font-medium">{testimonials[active].name}</span> 
        </div>

        
        <div className="absolute w-full flex justify-center gap-4  z-999 bottom-0">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2 h-2 rounded-full block font-light text-neutral-700 transition-all duration-300 ${
                idx === active ? 'bg-indigo-600 scale-125' : 'bg-indigo-200'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
    </motion.div>
  );
};

export default Testimonial