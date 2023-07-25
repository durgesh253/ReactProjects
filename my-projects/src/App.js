import React from 'react'
import { useState } from 'react'
import Values from 'values.js';
import Singlecolor from './Singlecolor';

function App() {
  const [color,setcolor] = useState('');
  const [error,seterror] = useState(false);
  const [list,setlist] = useState([]);

  const handlesubmit =  (e) => {
     e.preventDefault();
     try {
      let colors = new Values(color).all(20)
      console.log(colors);
      setlist(colors);
     } catch (error) {
      console.log(error);
      seterror(error)
     }
  
  }
  return (
    <>
    <div className='conatiner m-5'>
       <div className='box d-flex'>
        <h3 className=''>Color Genrator</h3>
        <form action="" onSubmit={handlesubmit}>
          <input type="text" className='form-control' placeholder='black' value={color} 
            
          onChange={(e) =>  setcolor(e.target.value)} />
         
        </form>
        <button className='btn btn-primary btn-sm'>submit</button>
       </div>
       <div className='list'>
        {
          list.map((item,index) => {
          return(
            <Singlecolor key={index} {...item} index={index}/>
          )
          })
        }
       </div>
      </div> 
      
    </>
  )
}

export default App
