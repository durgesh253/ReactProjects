import React, { useState } from 'react'
import StudentList from './StudentList'
import Data from './Data';
function App() {
  const [students,setStudents] = useState(Data);
  return (
    <div>
      <h2 className='text-center bg-gradient'>Student Details</h2>
      <section className='container' id='card'>
        <h3>{students.length} of Students</h3>
        <StudentList students={students}/>
        <button className='btn btn-light btn-sm' onClick={() => setStudents([])}>Clear All</button>
      </section>
    </div>
  )
}

export default App;
