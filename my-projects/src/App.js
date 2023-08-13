import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Places from './Places';

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [places,setplaces] = useState([]);
  const [loading,setloading] = useState(true);
const removeplace = (id) => {
  const newplace = places.filter((place) => place.id !== id);
  setplaces(newplace);
}

 const fetchplaces =  async () => {
  setloading(true)
  try {
    const repsonse = await fetch(url);
    const data = await repsonse.json();
    console.log(data);
    setplaces(data)
    setloading(false)
  } catch (error) {
    console.log(error);
    setloading(false);
  }
 }
  useEffect(() => {
    fetchplaces();
  },[]);

  if(loading) {
    return <Loading/>
  }

 if(places.length === 0) {
  return <div className='text-center'>
    <h1>No Place left</h1>
    <button className='btn btn-primary' onClick={() => fetchplaces()}>Go Places</button>
  </div>
 }
  return (
    <>
    <section>
      <div>
        <Places places={places} removeplace={removeplace}/>
      </div>
    </section>
      
    </>
  )
}

export default App
