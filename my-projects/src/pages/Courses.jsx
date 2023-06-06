import React from 'react'
import { courselist } from '../CourseList'
import { Link, useNavigate } from 'react-router-dom'

function Courses() {
 const navigate = useNavigate()
  return (
  <>
  <h3>Courses</h3>
 
  {courselist.map((item) =>{
    const {name, desp, id} = item;
    console.log("item" ,item)
       return( 
        <div className="row">
  <div className="col-md-6 mb-3 mb-4 " key={id}>
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">{name} {id}</h5>
        <p className="card-text">{desp}</p>
        {/* <Link to={`/course/${id}`} href="#" className="btn btn-primary">view Course</Link> */}

        <button className='btn btn-primary' onClick={() => navigate(`/course/${id}`, {state : item})}>view course</button>
      </div>
    </div>
  </div>
</div>

       )
    })
  }
  </>
  )
}

export default Courses
