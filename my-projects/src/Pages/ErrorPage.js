import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';


function ErrorPage() {
  return (
    <>
    <div className='container text-center mb-5 ' style={{height:"400px" }}>
      <div>
        <h2 className='mt-5'><SentimentVeryDissatisfiedIcon fontSize='lar'/></h2>
        <h3 className='text-danger ' style={{fontSize:"40px"}}>404 - PAGE NOT FOUND</h3>
        <p className='text-dark'>The page are looking for might have been removed had its
          name changed or is temporarily Unavlible.
        </p>
      </div>
      <Link to='/' className='btn btn-outline-primary'>GO TO HOMEPAGE</Link>
    </div>
      
    </>
  )
}

export default ErrorPage
