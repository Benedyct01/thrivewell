import React from 'react'
import Hero from './donations/Hero'
import Supportthrivewell from './donations/Supportthrivewell'
import Joinus from './donations/Joinus'
import Navbar from './components/Navbar'
import Donationtips from './donations/Donationtips'
import Ourgoals from './donations/Ourgoals'
import Savelives from './donations/Savelives'
import Footer from './components/home/Footer'

const Donations = () => {
  return (
    <>
    <div className='overflow'>
      <Navbar/>
    <Hero/>
    <Supportthrivewell/>
    <Joinus/>
    <Donationtips/>
    <Ourgoals/>
    <Savelives/>
    <Footer/>
    </div>
    </>
  )
}

export default Donations