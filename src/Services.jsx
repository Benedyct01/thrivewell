import React from 'react'
import Hero from './components/services/Hero'
import Servicesarticle from './components/services/Servicesarticle'
import Conditionguides from './components/services/Conditionguides'
import Clientsreviews from './components/services/Clientsreviews'
import Footer from './components/home/Footer'
import Navbar from './components/Navbar'

const Services = () => {
  return (
    <>
    <div className='overflow'>
      <Navbar/>
    <Hero/>
    <Servicesarticle/>
    <Conditionguides/>
    <Clientsreviews/>
    <Footer/>
    </div>
    </>
  )
}

export default Services