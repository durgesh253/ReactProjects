import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQ({title, info} ) {
    const [showinfo,setshoinfo] = useState(false);
  return (
    <div className='container'>
        <div className='conatiner mb-4 bg-danger-subtle d-flex shadow'>
        <h2>{title}</h2>
        <button className='btn' onClick={() =>  setshoinfo(!showinfo)}>
            {showinfo ? <AiOutlineMinus className=''/> : <AiOutlinePlus/>}
        </button>
        </div>
         {showinfo && <p>{info}</p>}
      
    </div>
  )
}

export default SingleQ
