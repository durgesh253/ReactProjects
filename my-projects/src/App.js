import React from 'react'
import LoginForm from './Pages/LoginForm'
import { Route, Routes } from 'react-router-dom'
import AxiosFetch from './Pages/AxiosFetch'
import Nav from './Pages/Nav'
import ReactRedux from './Pages/ReactRedux'
import { store } from './Redux/Store'
import Products from './Pages/Products'


function App() {
  return (
<>
   <Nav/>
  
    <Routes>
      <Route path='/axios' element={<AxiosFetch/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/redux'  element={<Products/>}/>
    </Routes >
    </>
  )
}

export default App
