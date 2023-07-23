import React, { useState } from 'react'

function Place({id,image,name,info,price,removeplace}) {
    const [readMore,setReadMore] = useState(false);
  return (
  
  <div className="card" style={{width: '18rem'}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name} {price}</h5>
    <p className="card-text">
        {
            readMore ? info : `${info.substring(0,150)}...`
          
        }
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'showless' : "redmore"}
          </button>
    </p>
    <a href="#" className="btn btn-primary" onClick={() => removeplace(id)}>Not Intrested</a>
  </div>
</div>

  )
}

export default Place
