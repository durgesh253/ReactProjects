import React from 'react'

function StudentList({students}) {
  return (
    <>
        {
            students.map((student) => {
                const {image,id,name,age} = student;
                return(
                <article key={id}>
                    <img src={image} alt="" style={{height : "130px", width: "140px"}}/>
                    <h3>{name}</h3>
                    <p>Age: {age}</p>
                    <hr />
                </article>
                
           )})
        }
      
    </>
  )
}

export default StudentList
