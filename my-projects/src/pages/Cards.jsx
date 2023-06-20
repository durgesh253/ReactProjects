import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Cards({movie}) {
    const [loading, setloading] = useState(true);

    useEffect(() =>{
        setTimeout(() => {
            setloading(false)
        },1500)
    },[]);
  return <>
    {
        loading ? 
        <div className='cards'>
             <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2}/>;
            </SkeletonTheme>
        </div>
        :
        <NavLink to={`/movie/${movie.id}`}>
            <div className='cards' style={{color: "white"}}>
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="" className='card-img' />
                <div className='card-overlay'>
                    <div className='card-title'>{movie.original_title}</div>
                    <div className='card-date'>{movie.release_date}</div>
                    <div className='card_disp'>{movie.vote_average} <i class="fa-solid fa-star"></i></div>
                </div>
            </div>
        </NavLink>


    }
  </>
}

export default Cards
