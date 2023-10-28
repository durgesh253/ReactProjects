import React from 'react'
import { Route ,Switch} from 'react-router-dom'
import Users from './Users'

function Admin() {
  return (
    <Switch>
    <Route  path='/users' Component={Users}/>
    </Switch>
   
  )
}

export default Admin