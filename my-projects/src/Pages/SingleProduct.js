import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getproductDetails } from '../reduxd/FirstSlice';

function SingleProduct() {
  const {id} = useParams();
const distpatch =  useDispatch()

  const {loading,productDetails} = useSelector((state) => state.counter);
    
useEffect(() => {
distpatch(getproductDetails(id))
},[])

  if(loading){
    return <h2>Loading.....</h2>
  }
  return (
    <div className="container">
    <div className="row py-5">
      <div className="col-md-4">
        <div className='card'>
        <img src={productDetails.image} width="100%" alt="" height='200px'/>
      </div>
      <div className="col-md-8">
        <h2>Name: {productDetails.name}</h2>
        <p> Category: {productDetails.price} </p>
        <p>{productDetails.description}</p>
      </div>
      </div>
    </div>
  </div>
 
  )
}

export default SingleProduct
