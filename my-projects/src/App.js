import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/cartinfoslice';
import { changename } from './redux/profileslice';
import { useState } from 'react';
import List from './List';


function App() {


  // useSelector((state) => console.log(state))  
// console.log(increment);

const {totalitem} = useSelector((state) => state.cart)
const destpatch = useDispatch()
const {name, address,image } = useSelector((state) => state.profile) 

const [formValue , setformValue] = useState(0)
const [userName , setuserName] = useState("");

 return  <List/>
  return (
   
    <>
    <div>
      <h1>React Redux</h1>

      <h2>TOtal items {totalitem}</h2>
      <h1>{formValue}</h1>
      <input value={formValue} onChange={(e) => setformValue(e.target.value)}  / >
      <button className='btn btn-primary' onClick={() => destpatch(increment(formValue))}>+</button>
      <span>  </span>
      <button className='btn btn-danger'onClick={() => destpatch(decrement(formValue))}>-</button>
      <h3>User Profile</h3>
      <input value={userName} onChange={(e) => setuserName(e.target.value)} />
      <h3>Name:{name}</h3>
      <h4>Address: {address}</h4>
      <button className='btn btn-dark' onClick={() =>destpatch(changename(userName))}>change Name</button>
      
    </div>
    <div className='container'>
      <img src={image} alt="" style={{height: "100px", width : "100px"}} />


    </div>
   </>
  )
}

export default App
