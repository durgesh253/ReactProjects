import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { courselist } from '../CourseList';


function DetailCourse() {
    
    const parms =useParams();
    console.log(parms);

    const [courseDetail, setcourseDetail] = useState({});

    useEffect(() =>{
    const findvalue =  courselist.find((item) => item.id == parms.id)
    setcourseDetail(findvalue);
    })
  
    const locaation = useLocation();
    console.log(locaation.state)
  return (
    <>
    <h2>Course Name : {locaation.state.name}</h2>
    <h2>About Course :{locaation.state.desp}</h2>
    </>
    // <div>
    //     <h2>course Details</h2>
    //     <h2>course id : {parms.id}</h2>
    //     <h3>course Name :{courseDetail.name}</h3>
    //     <h4>About Course: {courseDetail.desp}</h4>
        
    //     <h3></h3>
      
    // </div>
  )
}

export default DetailCourse
