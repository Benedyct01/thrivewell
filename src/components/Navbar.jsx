import React, { useEffect, useRef, useState } from 'react'
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
        const menuRef = useRef(null);
  
        
  
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
    <nav
    className='w-full h-[80px] absolute top-2 left-0 text-[#010080] p-4 z-9999'
    >
      <div
      className="flex flex-row items-center justify-between "
      >
      <Link to="/"><img src="/logo.png" alt="" className='w-[120.88px] h-[25.19px] justify-start items-start ml-15 max-sm:ml-4'/></Link>
      <button 
          className="block cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdMenuOpen className='text-3xl' /> : <MdMenu className='text-3xl' />}
        </button>
        <ul
          ref={menuRef} 
          className={`lg:flex items-center absolute top-20 lg:static right-5 w-[60%] text-center gap-7 lg:gap-9 rounded-3xl bg-blue-900 opacity-92 min-lg:bg-none   max-lg:text-white font-semibold lg:w-auto lg:bg-transparent lg:flex-row z-9999 ${
            isOpen ? 'h-[auto] animate-slide-in duration-400' : 'h-[0px]'
          }`}
        >
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 pb-2 
                 text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/">Home</Link></li>
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 pb-2 
                text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/about">About</Link></li>
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 pb-2 
                text-black active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/donations">Donations</Link></li>
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 pb-2 
                text-white active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/services">Services</Link></li>
          <li className={`block ${isOpen ? "" : "max-lg:hidden"} pt-2 pb-2 
                text-white active:text-indigo-900 hover:text-indigo-900 max-lg:text-white max-lg:hover:text-cyan-200`} ><Link to="/consultation">Consultation</Link></li>
        </ul>
        <button className='max-lg:hidden mr-5 h-[60px] w-[210px] rounded-full inset-0 bg-[#010080] text-white hover:bg-indigo-950 text-center'>Get Started</button>
        </div>
        
    </nav>
  )
}

export default Navbar