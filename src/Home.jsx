import React from 'react'
import './home.css'
import Hero from './components/home/Hero'
import Navbarhome from './components/Navbarhome'
import Expertsaying from './components/home/Expertsaying'
import MedicalServices from './components/home/MedicalServices'
import Subscribeservices from './components/home/Subscribeservices'
import Testimonial from './components/home/Testimonial'
import Articles from './components/home/Articles'
import Frequentlyasked from './components/home/Frequentlyasked'
import Donate from './components/home/Donate'
import Appointment from './components/home/Appointment'
import Footer from './components/home/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Navbarhome/>
    <div className='overflow'>
    <Expertsaying/>
    <MedicalServices/>
    <Subscribeservices/>
    <Testimonial/>
    <Articles/>
    <Frequentlyasked/>
    <Donate/>
    <Appointment/>
    <Footer/>
    </div>
  </>
  )
}

export default Home