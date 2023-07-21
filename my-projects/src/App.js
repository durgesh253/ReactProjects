import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Update from './Update'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
      
    </>
  )
}

export default App
