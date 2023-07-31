import React from 'react'
import { Typography,Button} from '@mui/material'
import Form from './Form'
import Navbar from './Navbar'

import Cards from './Cards'
import Modes from './Modes'



function App() {
  return (
    <div>
      {/* use text typography */}
      <Navbar/>
   <Modes/>
      <Cards/>
      <Typography variant='h2' sx={{color: "red"}}>
       Durgesh Jadhav
      </Typography>
      <Button variant='contained' onClick={() =>  alert("you clicked")}>Click Me</Button>
      <Button size='large'variant='outlined'>heelo guys</Button>
    <hr />
    
      <Form/>
      
    </div>
  )
}

export default App
