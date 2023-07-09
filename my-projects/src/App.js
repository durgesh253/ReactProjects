import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Componants/Layout'
import About from './Componants/About'
import Navbar from './Componants/Navbar'
import Contact from './Componants/Contact'
import Footer from './Componants/Footer'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
   </Routes>
   <Footer/>
   </>
  )
}

export default App

