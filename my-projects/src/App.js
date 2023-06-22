import React from 'react'
import Navbar from './componants/Navbar'
import { Route, Routes } from 'react-router-dom';
import MovieList from './pages/MovieLists';
import MoviDetail from './componants/MoviDetail';
import Homes from './pages/Homes';
import MovieLists from './pages/MovieLists';


function App() {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Homes/>}/>
      <Route path='movie/:id' element={<MoviDetail/>}/>
      <Route path='movies/:type' element={<MovieLists/>}/>
      <Route path='/*' element={<h2>Error Page</h2>}/>
    </Routes>
   
   </>
  )
}

export default App;
