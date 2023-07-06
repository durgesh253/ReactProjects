import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Pages/Cart'
import ErrorPage from './Pages/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
   <>
 <Navbar/>
   <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
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

