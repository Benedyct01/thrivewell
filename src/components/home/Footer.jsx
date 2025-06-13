import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';


const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity:0, y:100 }}
    whileInView={{ opacity:1, y:0}}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.9,
      damping: 20,
    }}
    className="min-lg:h-[300px] bg-[#313030] text-white pt-8 pb-6 px-4 mt-30 flex flex-col lg:flex-row"
    >
      <div className="w-full lg:w-1/2 mx-auto flex flex-col lg:flex-row  gap-10 lg:justify-center lg:items-center">
        {/* Left: Logo & Social */}
        <div className="flex flex-col gap-6 w-[80%] lg:w-1/2 lg:justify-center lg:items-center lg:text-center">
          <div><img src='/logo.png' className='w-40 h-10 max-lg:px-5'/></div>
          <p className='min-lg:hidden font-light max-lg:px-5'>We believe healthcare should be fast, accessible, and stress-free.</p>
          <div className="flex flex-row gap-4 max-lg:hidden">
            <a>
                  <div className='w-7 h-7 rounded-full bg-indigo-900 flex justify-center items-center'><img src='/fb.png' className='w-6 h-6'/></div>
            </a>
            <a>
                  <div className='w-7 h-7 rounded-full bg-indigo-900 flex justify-center items-center'><img src='/ig.png' className='w-6 h-6'/></div>
            </a>
            <a>
                  <div className='w-7 h-7 rounded-full bg-indigo-900 flex justify-center items-center'><img src='/x.png' className='w-6 h-6'/></div>
            </a>
            <a>
                  <div className='w-7 h-7 rounded-full bg-indigo-900 flex justify-center items-center'><img src='/in.png' className='w-6 h-6'/></div>
            </a>
          </div>
          <div className="mt-4 text-sm max-lg:hidden">2025 Medical. All Rights Reserved.</div>
        </div>


        <div className='flex flex-col gap-4 w-[90%] lg:w-1/2 font-light lg:font-medium text-normal max-lg:px-5'>
        <p>Subscribe Newsletter</p>
        <p>Join our mailing list for the latest news and events. We assure you that we will not send unnecessary emails.</p>
        <form action="sumbit"><div className='relative max-lg:items-center'><input type="text" className='w-full bg-[#BBE1F4]/50 py-4 px-3 rounded-lg outline-none' placeholder='Enter your email' /><div className='w-10 h-10 rounded-md absolute bottom-2 right-3 flex justify-center items-center bg-white'><ImArrowUpRight2 className='text-[#313030] lg:text-[#0DC6FE]' /></div></div></form>
        </div>
        </div>


        {/* Center: Nav Links */}
        <div className='w-full lg:w-1/2 mx-auto flex flex-row  gap-3 px-5 justify-center items-center max-lg:pt-8 font-light lg:font-normal'>
        <div className="flex flex-col gap-4 w-1/3 text-sm">
        <p>Quick Links</p>
          <Link to="/about" className="hover:text-indigo-600 transition">About Us</Link>
          <a href="/services" className="hover:text-indigo-600 transition">Our services</a>
          <a href="/services" className="hover:text-indigo-600 transition">Article</a>
          <Link to="/contact" className="hover:text-indigo-600 transition">Contact Us</Link>
        </div>


        <div className="flex flex-col gap-4 w-1/3 text-sm font-light lg:font-normal">
        <p>Resources</p>
          <Link to="/" className="hover:text-indigo-600 transition">FAQs</Link>
          <Link to="/privacypolicy" className="hover:text-indigo-600 transition">Privacy Policy</Link>
          <a href="/services" className="hover:text-indigo-600 transition">Terms of Service</a>
        </div>


        <div className="flex flex-col gap-4 w-1/3  text-sm font-light lg:font-normal">
        <p>Company Info</p>
          <p className="hover:text-indigo-600 transition">Email: info@Thrivewell.io</p>
          <p className="hover:text-indigo-600 transition">Work Hours</p>
          <p className="hover:text-indigo-600 transition">Monday-Friday 9AM - 6PM EST</p>
        </div>
        </div>

        <div className='flex flex-col min-lg:hidden pt-5 px-5'>
            <div className="flex flex-row gap-4">
            <a>
                  <div className='w-7 h-7 rounded-full bg-white flex justify-center items-center'><img src='/fbblack.png' className='w-6 h-6'/></div>
            </a>
            <a>
                  <div className='w-7 h-7 rounded-full bg-white flex justify-center items-center'><img src='/igblack.png' className='w-6 h-6'/></div>
            </a>
            <a>
                  <div className='w-7 h-7 rounded-full bg-white flex justify-center items-center'><img src='/xblack.png' className='w-6 h-6'/></div>
            </a>
            <a>
                  <div className='w-7 h-7 rounded-full bg-white flex justify-center items-center'><img src='/inblack.png' className='w-6 h-6'/></div>
            </a>
          </div>
          <div className="mt-4 text-sm min-lg:hidden mx-auto font-light">2025 Medical. All Rights Reserved.</div>
        </div>

        
      
    </motion.footer>
  )
}

export default Footer