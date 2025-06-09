import React from 'react'
import './home.css'
import Hero from './components/home/Hero'
import Navbar from './components/Navbar'
import Expertsaying from './components/home/Expertsaying'
import MedicalServices from './components/home/MedicalServices'
import Subscribeservices from './components/home/SUbscribeservices'
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
    <Navbar/>
    <Expertsaying/>
    <MedicalServices/>
    <Subscribeservices/>
    <Testimonial/>
    <Articles/>
    <Frequentlyasked/>
    <Donate/>
    <Appointment/>
    <Footer/>
  </>
  )
}

export default Home