import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import Contact from './Pages/Contact'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Pages/Cart'
import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GlobalProduct from './Pages/GlobalProduct'


function App() {
  return (
   <>
 <Navbar/>
   <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/globalproduct' element={<GlobalProduct/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<ErrorPage/>}/>
   </Routes>
   <Footer/>
   </>
    
  )
}

export default App

