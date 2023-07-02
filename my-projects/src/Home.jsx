import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const notify = () => {
        toast.info("Wow Its Great");
  }
  return (
    <>
      <div className='container p-4'>
      <h1>Welcome To Our Website</h1>
      <Link className='btn btn-primary' to='/form' >GO TO WEBSITE</Link>
      <button className='btn btn-info ml-2'onClick={notify}>NOtify!</button>
      <ToastContainer/>
      </div> 
    </>
  )
}

export default Home
