import React from 'react'
import './index.css'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Donations from './Donations'
import Services from './Services'
import Consultation from './Consultation'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/donations' element={ <Donations/> }/>
      <Route path='/services' element={ <Services/> }/>
      <Route path='/consultation' element={ <Consultation/> }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App