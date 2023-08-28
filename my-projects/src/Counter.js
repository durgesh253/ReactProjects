import React, { useState } from 'react'

function Counter() {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count + 1)
    }
    const reset = () => {
        setcount(0)
    }
    const decement = () => {
        setcount(count -1)
    }
  return (
    <div className='m-5 text-center'>
      <h1>React web</h1>
       <h2>Count : {count}</h2>
       <button className='btn btn-primary m-1' onClick={increment}>Increment</button>
       <button className='btn btn-danger m-1' onClick={reset}>Reset</button>
       <button className='btn btn-primary m-1' onClick={decement}>Decrement</button>
      
    </div>
  )
}

export default Counter
