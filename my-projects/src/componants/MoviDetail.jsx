import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MoviDetail() {
const {id}  =   useParams();
const [movieDeatil , setMovieDetai] = useState([])

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then((rsp) => rsp.json())
    .then((data) => setMovieDetai(data))
},[]);

  return (
    <>
   <div class="card mb-3" style ={{maxWidth: "100%" , backgroundColor : "black" , color : "white"}}>
  <div class="row g-0">
    <div class="col-md-4 pt-2">
      <img src={`https://image.tmdb.org/t/p/original${movieDeatil ? movieDeatil.poster_path : ""}`} class="img-fluid rounded-start h-75 p-lg-3" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{fontSize:"40px"}}>{movieDeatil.original_title}</h5>
        <p class="card-text"><h3>About Movie:</h3>{movieDeatil.overview}</p>
        <h3 class="card-text">Rating: {movieDeatil.vote_average}</h3>
        <h4>Language : {movieDeatil.original_language}</h4>
        <h3>Relese Date : {movieDeatil.release_date}</h3>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default MoviDetail
