import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function PrivateRoute({Children}) {
const {isLogin}  =  useSelector((state) =>  state.auth)

if(isLogin){
    return Children ;
}
  return <Navigate to="/login"/>
}

export default PrivateRoute