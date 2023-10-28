import React, { Suspense } from 'react'
import { Route, Router, Routes,Switch } from 'react-router-dom';


const Admin = React.lazy(() =>  import('./Admin'))

function App() {
  return (
    <>
   <Router>
   <Switch>
   <Route  path='/admin'/>
   <Suspense fallback={<div>Loading.....</div>}>
   <Admin/>
   </Suspense>
   </Switch>
   
   </Router>
   
   </>
  )
}

export default App;
