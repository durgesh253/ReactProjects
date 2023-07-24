import React, { useState } from 'react'
import data from './data'
import SingleQ from './SingleQ'


function App() {
  const [question,setquestion] = useState(data)
  return (
    <>
    <div className='conatiner bg-body-tertiary m-5'>
      <div className='row'>
        <div className='conatiner p-5'>
        <div className='col-md-4'>
          <h1>Question and Answer Accordion</h1>
        </div>
        <div className='col-md-8'>
            {question.map((que) => {
               return <SingleQ  key={que.id} {...que}/>
            })}
        </div>
      </div>
      </div>
    </div>
      
    </>
  )
}

export default App
