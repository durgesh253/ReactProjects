import React from 'react'


fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(json=>console.log(json))


function Products() {

  
  return (
    <>
    <h1>product</h1>
   
   
    </>
  );
}

export default Products;
