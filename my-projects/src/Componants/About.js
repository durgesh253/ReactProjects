import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import profile from './profile.jpeg'

function About() {
  return (
    <>
    <div>
  <section className="w3l-aboutblock1" id="about">
    <div className="midd-w3 ">
      <div className="container py-lg-5 py-md-3">
        <div className="row">
          <div className="col-lg-4">
            <div className="position-relative">
              <img src={profile} alt className="radius-image img-fluid" />
            </div>
          </div>
          <div className="col-lg-8 mt-lg-0 mt-5">
            <h5 className="title-small mb-2">Hello, I am UI/UX Designer</h5>
            <h3 className="title-big">Having O7 Years of Experience</h3>
            <p className="mt-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non quae, fugiat consequatur voluptatem nihil ad. Lorem ipsum dolor sit amet.</p>
            <div className="my-info mt-4 " style={{gap:"20px"}}>
              <div className="single-info"><span>Name:</span>
                <p>Durgesh Jadhav</p>
              </div>
              <div className="single-info"><span>Age:</span>
                <p>19 Years</p>
              </div>
              <div className="single-info"><span>From:</span>
                <p>Surat, Gujrat</p>
              </div>
              <div className="single-info"><span>Email:</span>
                <p>jadhavdurgesh256@gmail.com</p>
              </div>
              <a href="#download" className="btn btn-style btn-primary">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  
    </>
  )
}

export default About
