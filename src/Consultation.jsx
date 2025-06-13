import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/consultation/Hero';
import Deserve from './components/consultation/Deserve';
import Dedicated from './components/consultation/Dedicated';
import Footer from './components/home/Footer';

const Consultation = () => {
  return (
    <>
    <Navbar/>
    <div className='overflow'>
    <Hero/>
    <Deserve/>
    <Dedicated/>
    <Footer/>
    </div>
    </>
  )
}

export default Consultation