import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <footer>
  <div className="container">
    <div className="row py-5">
      <div className="col-lg-4 col-md-6 col-sm-12 col-auto">
        <a className="logo text-white text-decoration-none" href="#">
          <img src="../HTML PROGRAMS/logo5.png" className="logo" alt="logo" />
          <span className="logo-chng">Crack</span>Mpsc
        </a>
        <p className="text-secondary py-3">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
        </p>
        <div className="row social">
          <div className="col-1">
            <Link to='/' data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="facebook">
              <span className="fab fa-facebook" />
            </Link>
          </div>
          <div className="col-1">
            <Link to='/' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="linkedin">
              <i className="fab fa-twitter" />
            </Link>
          </div>
          <div className="col-1">
            <Link to='/' data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="twitter">
              <i className="fab fa-instagram" />
            </Link>
          </div>
          <div className="col-1">
            <Link to='/' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="google+">
              <i className="fab fa-linkedin" />
            </Link>
          </div>
          <div className="col-1">
            <Link to='/'  data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="github">
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-12 col-auto">
        <h5 className="text-uppercase py-4 text-white">Categories</h5>
        <ul className="list-unstyled cat-list">
          <li className="pb-2"><a href className="text-decoration-none text-secondary">Upsc</a></li>
          <li className="pb-2"><a href className="text-decoration-none text-secondary">Mpsc</a></li>
          <li className="pb-2"><a href className="text-decoration-none text-secondary">Exam Quiz</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-auto">
        <h5 className="text-uppercase py-4 text-white">Contact info</h5>
        <ul className="list-unstyled cat-list">
          <li className="text-secondary pb-2">10001, 5th Avenue, #32841 block, USA</li>
          <li className="pb-2"><a href className="text-decoration-none text-secondary">+1222 35689</a></li>
          <li className="pb-2"><a href className="text-decoration-none text-secondary">info@example.com</a></li>
          <li className="pb-2"><a href className="text-decoration-none text-secondary">www.example.com</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-auto">
        <h5 className="text-uppercase py-4 text-white">Newsletter</h5>
        <form action>
          <div className="input-group">
            <input type="text" placeholder="Email Address" className="form-control" />
            <button className="input-group-text">
              <span className="fa fa-paper-plane" />
            </button>
          </div>
        </form>
        <p className="text-secondary py-3">Subscribe to our mailing list and get updates to your email inbox.</p>
      </div>
    </div>
    <div className="row text-center">
      <p className="text-white">© 2023 CrackMPsc All Rights Reserved | CrackMpsc Theme by <a href className="text-white copy">Upsccrack.</a></p>
    </div>
  </div>
</footer>

    
    </>
  )
}

export default Footer
