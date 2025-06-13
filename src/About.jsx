import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/about/Hero';
import Abouthrivewell from './components/about/Abouthrivewell';
import Whychooseus from './components/about/Whychooseus';
import Corevalues from './components/about/Corevalues';
import Footer from './components/home/Footer';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='overflow'>
    <Hero/>
    <Abouthrivewell/>
    <Whychooseus/>
    <Corevalues/>
    <Footer/>
    </div>
    </>
  )
}

export default About