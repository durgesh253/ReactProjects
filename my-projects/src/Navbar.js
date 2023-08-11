import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Appcontext } from './App'



function Navbar() {
  const {login,setlogin,cart} = useContext(Appcontext);
  const navigate = useNavigate();
  

 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/form' className="nav-link">Form</Link>
        </li>
        <li className="nav-item">
          <Link to='/courses' className="nav-link" href="#">courses</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <button
              type="button"
              className="btn btn-dark btn-sm me-3 position-relative"
            >
           cart
              <span
                className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "26px", height: "26px" }}
              >
                {cart.length}
              </span>
            </button>
      {
        login ? <button className='btn btn-danger'onClick={() => setlogin(false)}>Logout</button> :  <button className='btn btn-primary' onClick={() =>  setlogin(true)} >Login</button>
      }
    </div>
  </div>
</nav>

  )
}

export default Navbar
