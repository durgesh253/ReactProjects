import React from 'react'
import logo from '../images/logo1.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" style={{height:"50px" ,width : "90px"}} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about' >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/globalproduct">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart"><ShoppingCartIcon/></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Button variant="contained">Login</Button></a>
        </li>
      </ul>
        <ul className="navbar-nav">
       
       
        </ul>
    </div>
   
  </div>
</nav>

    </>
  )
}

export default Navbar
