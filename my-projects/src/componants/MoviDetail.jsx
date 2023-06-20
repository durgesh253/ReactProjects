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
   <div class="card mb-3" style ={{maxWidth: "80%" , backgroundColor : "black" , color : "white"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://image.tmdb.org/t/p/original${movieDeatil ? movieDeatil.poster_path : ""}`} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{movieDeatil.original_title}</h5>
        <p class="card-text">{movieDeatil.overview}</p>
        <p class="card-text">{movieDeatil.vote_average}</p>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default MoviDetail
