import React from 'react'
import { courselist } from '../CourseList'
import { Link } from 'react-router-dom'

function Courses() {
  return (
  <>
  <h3>Courses</h3>
 
  {courselist.map((item) =>{
    const {name, desp, id} = item;
       return( 
        <div class="row">
  <div class="col-md-6 mb-3 mb-4 ">
    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title">{name} {id}</h5>
        <p class="card-text">{desp}</p>
        <Link to={`course/${id}`} href="#" class="btn btn-primary">view Course</Link>
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
