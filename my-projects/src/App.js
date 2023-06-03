import React, {  createContext, useContext, useState } from 'react'
import ComponantA from './components/ComponantA';


export const Userdetail = createContext();


function App() {
  const [userName , SetUserName] = useState("Durgesh");
  const [totalAmount, SetTotalAmount] = useState(200);

  return (
 <Userdetail.Provider value={{userName ,totalAmount}}>
    <div className='container'>
      <h2>use Context</h2>
      <ComponantA/>
     
    </div>
    </Userdetail.Provider>
  
  )
}

export default App
