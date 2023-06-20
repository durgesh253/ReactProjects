import React from 'react'
import Navbar from './componants/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MovieList from './Pages/MovieList';
import MoviDetail from './componants/MoviDetail';


function App() {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='movie/:id' element={<MoviDetail/>}/>
      <Route path='movies/:type' element={<MovieList/>}/>
      <Route path='/*' element={<h2>Error Page</h2>}/>
    </Routes>
   
   </>
  )
}

export default App;
