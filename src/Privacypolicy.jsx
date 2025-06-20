import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/privacypolicy/Hero'
import Docs from './components/privacypolicy/Docs'
import Rightsnchoices from './components/privacypolicy/Rightsnchoices'
import Footer from './components/home/Footer'

const Privacypolicy = () => {
  return (
    <>
    <Navbar/>
    <div className='overflow'>
    <Hero/>
    <Docs/>
    <Rightsnchoices/>
    <Footer/>
    </div>
    </>
  )
}

export default Privacypolicy