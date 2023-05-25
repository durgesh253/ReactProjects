import React, { useEffect, useState } from 'react'
 const url = `https://course-api.com/react-tabs-project`

function App() {
    const [lodaing , setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value , setValue] = useState(0);

    const fetchjobs = async () =>{
        const response = await fetch(url);
        const newjobs = await response.json();
        setJobs(newjobs);
        setLoading(false);
    }

  useEffect(() =>{
   fetchjobs();
  },[]) 

  if(lodaing){
    return(
    <section className='section loading'>
        <h1>Loading....</h1>
    </section>
    )
  }
   
  
  const {title,dates,duties,company} = jobs[value];
  return (
    <>
    <h1 className='text-center text-primary'>Experiance</h1>
   
    <div className='btn-container text-center p-3 '>
        {
            jobs.map((item,index)=>{
                return <button className='btn btn-outline-success border' onClick={() =>{setValue(index)}}>{item.company}</button>
            })
        }

    </div>
    <div className='container'>
    <h2 className='text-danger'>{title}</h2>
   <button className='btn btn-warning '> <h3>{company}</h3> </button>
   <h5  className='text-primary'>{dates}</h5>
   <p className=''>{duties}</p>
   </div>


    </>
     )
}

export default App
