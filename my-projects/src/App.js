import React from 'react'
import Nav from './Nav'
import { useGlobalContext } from './Context'
import CartData from './CartData';


function App() {

  const {loading} = useGlobalContext();

  if(loading){
   return  <div>
  <div className="text-center m-5 ">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>

</div>
  }
  return (
    <div>
     <Nav/>
     <CartData/>
    </div>
  )
}

export default App
