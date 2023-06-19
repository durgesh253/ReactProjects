import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Coktail from './pages/Coktail'
import CocktailDetails from './pages/CocktailDetails'
import PrivateRoute from './pages/PrivateRoute'
import Login from './pages/Login'



function App() {
 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coktails' element={<Coktail/>}/>
        <Route path='/coktails/:id' element={<PrivateRoute><CocktailDetails/></PrivateRoute>} />
        <Route path='/product' element={<h1>Product list</h1>} />
        <Route path='/add-product' element={<h1>Add product</h1>}/>
        <Route path='/edit-product' element={<h1>Edit product</h1>}/>
        <Route path='/login' element={<Login/>}/>
    
      </Routes>
     
      
    </div>
  )
}

export default App
