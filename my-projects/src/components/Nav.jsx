import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import App, { Appdetails } from '../App'

function Nav() {
  const appdetails = useContext(Appdetails);
  console.log(appdetails);
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/support" className="nav-link" href="#">Support</Link>
        </li>
        <li className="nav-item">
          <Link to="/courses" className="nav-link" href="#">Courses</Link>
        </li> 
        <li className="nav-item">
          <Link to="/cocktail"  className="nav-link" href="#">Cocktail</Link>
        </li>
      </ul>
      <div className='d-flex justify-content-between'>
      {appdetails.login ?( <button className='btn btn-danger'>Logout</button>)
       :( <button className='btn btn-success'>Login</button>)
      }
      </div>
    </div>
  </div>
</nav>

   </>
  )
}

export default Nav
