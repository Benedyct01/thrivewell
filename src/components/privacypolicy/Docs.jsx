import React from 'react'
import { FaCheckSquare } from "react-icons/fa";
import { IoIosLock } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';

const Docs = () => {
  return (
    <>
    <div className='text-center mb-5 gap-1 w-[70%] mx-auto'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>Introduction</h1>
        <p className='text-sm md:text-base xl:text-lg'>Welcome to ThriveWell. Your privacy is important to us. This policy explains how we collect, use, and protect your personal 
information when you use our website and services.</p>
    </div>

    <div className='w-[70%] text-center mb-5 gap-1 mx-auto'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>Information We Collect</h1>
        <p className='text-sm md:text-base xl:text-lg'>We may collect the following types of information:</p>
        <p className='text-sm md:text-base xl:text-lg'>Personal information: Name, email, phone number and medical history (if provided).</p>
        <p className='text-sm md:text-base xl:text-lg'>Health Data: Blood pressure, blood sugar levels, medication history, and other health-related inputs.</p>
        <p className='text-sm md:text-base xl:text-lg'>Device & Usage Information: IP address, browser type, and activity logs for security purposes.</p>
    </div>

    <div className='text-center mb-5 gap-1 w-[70%] mx-auto'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>How we use your information</h1>
        <p className='text-sm md:text-base xl:text-lg'>We use your information to:</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='text-green-600 inline-block'><FaCheckSquare/></span>Provide personalized health recommendations and resources</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='text-green-600 inline-block'><FaCheckSquare/></span>Facilitate virtual consulatations and appointment bookings.</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='text-green-600 inline-block'><FaCheckSquare/></span>Improve our platform's functionality and security.</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='text-green-600 inline-block'><FaCheckSquare/></span>Communicate updates, alerts, and health tips.</p>
        
    </div>

    <div className='w-[70%] mx-auto text-center mb-5 gap-1'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>Data Protection and Security</h1>
        <p className='text-sm md:text-base xl:text-lg'>We implement strict encryption and security measures to protect your data.</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='text-yellow-700 inline-block'><IoIosLock/></span>We do not share your personal information with third parties without your consent, except as required by law.</p>
    </div>

    <div className='w-[70%] mx-auto text-center mb-5 gap-1'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>Your Rights & Choices</h1>
        <p className='text-sm md:text-base xl:text-lg'>You have the right to:</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='inline-block'><GiCheckMark/></span>Access, update, or delete your personal data.</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='inline-block'><GiCheckMark/></span>Opt-out of non-essential data collection and marketing communications.</p>
        <p className='text-sm md:text-base xl:text-lg'><span className='inline-block'><GiCheckMark/></span>Request a copy of the information we store about you.</p>
    </div>

    <div className='w-[70%] mx-auto text-center mb-5 gap-1'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>Cookies and Tracking</h1>
        <p className='text-sm md:text-base xl:text-lg'>We use cookies to improve user experience. You can manage cookie settings in your browser.</p>
    </div>

    <div className='w-[70%] mx-auto text-center mb-5 gap-1'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>Changes to This Policy</h1>
        <p className='text-sm md:text-base xl:text-lg'>We may update this policy from time to time. We will notify users of significant changes.</p>
    </div>

    <div className='w-[70%] mx-auto text-center mb-5 gap-1'>
        <h1 className='text-sm lg:text-lg xl:text-[20px] font-bold mb-1'>Contact Us</h1>
        <p className='text-sm md:text-base xl:text-lg'>For questions about this policy, contact us at <span><a href="support@thrivwell.com">support@thrivwell.com</a></span></p>
    </div>
    </>
  )
}

export default Docs