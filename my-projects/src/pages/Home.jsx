import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import MovieList from './MovieList';


function Home() {


    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then((rsp) => rsp.json())
        .then((data) => setPopularMovie(data.results))
    },[])
    const [popularmovie , setPopularMovie] = useState([]);


  return (
    <> 
    <Carousel
     showThumbs={false}
     autoPlay={true}
     transitionTime={3}
     infiniteLoop={true}
     showStatus={false}
    >

    {
        popularmovie.map(movie => (
           
             <NavLink style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
            <div className=''>
              <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} style={{width : "100%" , height : "550px"}}/>
              </div>
              <div className='image-overlay'>
                <div className='title'><h1>{movie.original_title}</h1></div>
                <div className='movie-date'>{movie.release_date}</div>
                <div className='discrip'><h4>{movie.overview}</h4></div>
                <div className="ratings"><h2>{movie.vote_average} <i class="fa-solid fa-star"></i></h2>
      
      </div>

              </div>
              </NavLink>
          
        ))
    }

</Carousel>
  <MovieList/>
 </>
  )
}

export default Home
