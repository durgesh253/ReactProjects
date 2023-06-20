import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { useParams } from 'react-router-dom';

function MovieList() {
const [MovieList , setMovieList] = useState([]);
const {type} = useParams();

useEffect(() => {
    fetchData();
},[])

useEffect(() => {
    fetchData()
},[type])

const fetchData =() =>{
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then((rsp) => rsp.json())
    .then((data) => setMovieList(data.results))
}

  return (
    <div className='movie-list'>
        <h2 className='list-title'>{type ? type : "popular"}</h2>
        <div className='list-cards'>
          {
            MovieList.map(movie => (
               <Cards movie={movie}/>
            ))
          }
        </div>
      
    </div>
  )
}

export default MovieList
