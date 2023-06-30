import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/FirstRedux';
import Stack from '@mui/material/Stack';
function ReactRedux() {
 const {items} = useSelector((state) => state.first);
 const dispatch = useDispatch();
  return (
    <>
    <h1 className='m-2'>{items}</h1>
    <button className='btn btn-primary btn-sm m-2' onClick={() => dispatch(increment(5))} >+</button>
    <button className='btn btn-danger btn-sm' onClick={() => dispatch(decrement())}>-</button>
    
      
    </>
  )
}

export default ReactRedux
