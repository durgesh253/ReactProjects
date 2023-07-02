import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import RegestrationForm from './RegestrationForm'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<RegestrationForm/>}/>
      </Routes>
     
    </div>
  )
}

export default App

