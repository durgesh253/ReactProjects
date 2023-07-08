import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <footer>
  <div className="container">
    <div className="row py-5">
      <div className="col-lg-4 col-md-6 col-sm-12 col-auto">
        <Link className="logo text-white text-decoration-none" >
          <img src='' className="logo" alt="logo" />
          <span className="logo-chng">Crack</span>Mpsc
        </Link>
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
          <li className="pb-2"><Link  className="text-decoration-none text-secondary">Upsc</Link></li>
          <li className="pb-2"><Link className="text-decoration-none text-secondary">Mpsc</Link></li>
          <li className="pb-2"><Link  className="text-decoration-none text-secondary">Exam Quiz</Link></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 col-auto">
        <h5 className="text-uppercase py-4 text-white">Contact info</h5>
        <ul className="list-unstyled cat-list">
          <li className="text-secondary pb-2">10001, 5th Avenue, #32841 block, USA</li>
          <li className="pb-2"><Link  className="text-decoration-none text-secondary">+1222 35689</Link></li>
          <li className="pb-2"><Link  className="text-decoration-none text-secondary">info@example.com</Link></li>
          <li className="pb-2"><Link className="text-decoration-none text-secondary">www.example.com</Link></li>
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
      <p className="text-white">© 2023 CrackMPsc All Rights Reserved | CrackMpsc Theme by <Link className="text-white copy">Upsccrack.</Link></p>
    </div>
  </div>
</footer>

    
    </>
  )
}

export default Footer
