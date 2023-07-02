import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className='container p-4'>
    <Link className='btn btn-primary m-2' to="/login">Login Form</Link>
    <Link className='btn btn-secondary m-2 ' to="/axios">Axios Data</Link>
    <Link className='btn btn-danger m-2 ' to="/redux">React Redux</Link>
    </div>
    <div className=''>
   <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor : "black"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
        
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

    </>
  )
}

export default Nav
