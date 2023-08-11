import React, { useContext } from 'react'
import { Appcontext } from './App'

function PrivateRote({children}) {
  const {login} = useContext(Appcontext)
  if(login){
    return children;
  }
  return (
    <div>
      <h1> I am Private Route</h1>
    </div>
  )
}

export default PrivateRote
