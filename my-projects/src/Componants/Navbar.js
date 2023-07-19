import React from 'react'
import logod from '../Componants/logo1.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg text-light " style={{backgroundColor:"black",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" href="#" ><img src={logod} style={{height:"40px",width:"60px"}} alt="" /></Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active text-light" aria-current="page" to='/'>Home</Link>
        <Link className="nav-link text-light" to='/about' >About</Link>
        <Link className="nav-link text-light" to='/contact'>Contact</Link>
        <a className="nav-link text-light disabled">Disabled</a>
      </div>
    </div>
  </div>
  
</nav>

   </>
  )
}

export default Navbar
