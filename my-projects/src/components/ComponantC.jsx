import React from 'react'
import { useContext } from 'react'
import { Userdetail } from '../App';


function ComponantC() {

  const context = useContext(Userdetail);
  console.log(context);
  return (
    <div>
     <h2>User Name:{context.userName} </h2>
     <h2>Total Amount:{context.totalAmount}</h2>
      
    </div>
  )
}

export default ComponantC
