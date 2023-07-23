import React from 'react'
import Place from './Place'

function Places({places,removeplace}) {
  return (
    <div className=''>
      <h2 className='text-center'>Our Places</h2>
      <section>
       {
        places.map((place) => {
          return <Place key={place.id} {...place} removeplace={removeplace} />
        })
       }
      </section>
      
    </div>
  )
}

export default Places
