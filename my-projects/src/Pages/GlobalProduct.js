import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductData } from '../reduxd/FirstSlice';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function GlobalProduct() {

  const {productData,loading} =  useSelector((state) => state.counter)
  const distpatch = useDispatch();

  useEffect(() =>  {
    distpatch(getproductData())
  },[])
  
  if(loading){
    return (
      <Box sx={{ width: '100%' }}>
      <LinearProgress />
      </Box>
    )
  }
  return (
 <>
 {productData && productData.map((items) => {
    
   return <h2>{items.id}</h2>
  })
 }
 </>

   
  
  )
}

export default GlobalProduct
