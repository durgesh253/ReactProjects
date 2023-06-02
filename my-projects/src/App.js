import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Support from './pages/Support';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import Cocktail from './pages/Cocktail';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';


function App() {
  return (
    <>
  
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/support" element={<Support/>} />
        <Route path="/courses"  element={<Courses/>}/>
        <Route path="/cocktail" element={<Cocktail/>}/>
        <Route path="/course" element={<CourseDetail/>} />
        
      </Routes>
        
      </>
   
  )
}

export default App

