import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Support from './pages/Support';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import Cocktail from './pages/Cocktail';
import Courses from './pages/Courses';
import { createContext } from 'react';
import { useState } from 'react';
import DetailCourse from './pages/DetailCourse';
import CocktailDetails from './pages/CocktailDetails';

export const Appdetails = createContext();




function App() {
  const [login,SetLogin] = useState(true);

  return (
    <>
    <Appdetails.Provider value={{login}}>
  
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/support" element={<Support/>} />
        <Route path="/courses"  element={<Courses/>}/>
        <Route path="/cocktail" element={<Cocktail/>}/>
        <Route path="/course/:id" element={<DetailCourse/>}/>
        <Route path="/cocktails/:id" element={<CocktailDetails/>} />
      
        
      </Routes>
      </Appdetails.Provider>
        
      </>
   
  )
}

export default App

