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

  const fetchplaces = async () => {
    setloading(true)
    try {
      const response = await fetch(url);
      const place = await response.json();
      setloading(false);
      setplaces(place);
      
    } catch (error) {
      setloading(false);
      console.log(error)
    }
  }
  useEffect(() => {
    fetchplaces();
  },[]);

  if(loading) {
    return <Loading/>
  }

  if(places.length === 0){
    return(
      <div className='conatiner'>
        <h1>No places left</h1>
        <button className='btn btn-info' onClick={() => fetchplaces()}>Refresh</button>
      </div>
    )
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
