import React, { useEffect, useRef, useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const Navbarhome = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [showNavbar, setShowNavbar] = useState(true);
      const [backdropFilter, setBackdropFilter] = useState(false);
      const [lastScrollYe, setLastScrollYe] = useState(0);
      const [lastScrollY, setLastScrollY] = useState(0);
      const menuRef = useRef(null);


  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowNavbar(true); 
    } else if (window.scrollY < lastScrollYe) {
      setShowNavbar(true); 
    } else {
      setShowNavbar(false); 
    }
    setLastScrollYe(window.scrollY);

    const currentScrollY = window.scrollY;

    if (currentScrollY < window.innerHeight) {
      // At the top of the page
      setBackdropFilter(false);
    } else {
      setBackdropFilter(true);
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-[100%] fixed top-0 text-[#010080] p-4 z-9999  ${backdropFilter ? 'backdrop-blur-md text-black! bg-black/10' : '' }`}
    >
      <div
      className="flex flex-row items-center justify-between "
      >
      <Link to="/"><img src="/navlogo.png" alt="" className='w-[190.88px] h-[40.19px] justify-start items-start ml-15 max-sm:ml-4'/></Link>
      <button 
          className="block cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdMenuOpen className='text-3xl' /> : <MdMenu className='text-3xl' />}
        </button>
        <ul
          ref={menuRef} 
          className={`lg:flex items-center absolute top-20 lg:static w-[60%] text-center gap-7 lg:gap-9  bg-blue-900 opacity-92 min-lg:bg-none   max-lg:text-white font-semibold lg:w-auto lg:bg-transparent lg:flex-row z-9999 ${
            isOpen ? 'h-600px w-full right-0 animate-slide-in duration-400' : 'h-[0px]'
          }`}
        >
          <li className={`block ${isOpen ? "flex justify-center text-center mt-15" : "max-lg:hidden"} pt-4 pb-4 
                 text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/">Home</Link></li>
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-4 pb-4 
                text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/about">About</Link></li>
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-4 pb-4 
                text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/donations">Donations</Link></li>
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-4 pb-4 
                text-white active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/services">Services</Link></li>
          <li className={`block ${isOpen ? "mb-15" : "max-lg:hidden"} pt-4 pb-4 
                text-white active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/consultation">Consultation</Link></li>
        </ul>
        <button className='max-lg:hidden mr-5 h-[47px] ring-white ring-1 w-[170px] rounded-2xl inset-0 bg-[#010080] text-white hover:bg-indigo-950 text-center'>Get Started</button>
        </div>
        
    </motion.nav>
  )
}

export default Navbarhome