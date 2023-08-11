import React, { createContext, useState } from 'react';
import Fillform from './Fillform';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PrivateRote from './PrivateRote';
import { courseList } from './CourseList';
import Courses from './Courses';


export const Appcontext =  createContext()

function App() {
  const[login,setlogin] = useState(false);
  const[cart,setCart] = useState([]);
  const [couseData,setCourseData] =  useState(courseList)


  return (
    <>
      <Appcontext.Provider value={{login,cart,setlogin,couseData,setCart}}>
    <Navbar/>
   <Routes>
    <Route path='/' element={<PrivateRote><Home/></PrivateRote>}/>
    <Route path='/form' element={<Fillform/>}/>
    <Route path="/courses" element={<PrivateRote><Courses/></PrivateRote>}/>
   </Routes>

   </Appcontext.Provider>  
    

    </>
  );
}

export default App;
