import React from 'react'

function StudentList({students,setStudents}) {

  const handledelete = (id) => {
 
    const deleteuser =  students.filter(f => f.id !== id);
    setStudents(deleteuser);

  }
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
                    <button className='btn btn-danger' onClick={() =>  handledelete(id)}>Delete</button>
                    <hr />
                    
                </article>
                
           )})
        }
      
    </>
  )
}

export default StudentList
