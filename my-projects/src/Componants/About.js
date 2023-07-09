import React from 'react'
import { FaHtml5 ,FaCss3Alt ,FaReact,FaBootstrap,FaGithub,FaAngular, FaJsSquare, FaStripe, FaStripeS, FaShopify} from 'react-icons/fa';
import profile from './profile.jpeg'
import { Link } from 'react-router-dom';
import Skills from './Skills';

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
            <h5 className="title-small mb-2 text-light">Hello, I am web devloper and Reactjs Devloper</h5>
            <h3 className="title-big">To creating a best websitse</h3>
            <p className="mt-4">
As a web developer, I have a strong foundation in HTML, CSS, and JavaScript, along with expertise in Bootstrap and React.js. With these skills, I can create dynamic, responsive, and visually appealing websites that provide an exceptional user experience.</p>
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
              <Link to="DurgeshResume.pdf" target="_blank" className="btn btn-style btn-primary" download>Download CV</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <div className='company-logos'>
        <div className='container py-md-4'>
        <h2 className='mt-3 '>My Skills :</h2>
            <div className='row py-5 justify-content-center'>
                <div className='col-lg-2 col-md-3 col-4'>
                <FaHtml5 style={{fontSize:"90px"}} color="#F06529"/>
                </div>
                <div className='col-lg-2 col-md-3 col-4'>
                <FaCss3Alt style={{fontSize:"90px"}} color="#28A4D9"/>
                </div>
                <div className='col-lg-2 col-md-3 col-4'>
                <FaReact style={{fontSize:"90px"}} color="#5ED4F4"/>
                </div>
                <div className='col-lg-2 col-md-3 col-4 mt-lg-0 mt-4'>
                <FaBootstrap style={{fontSize:"90px"}} color='#433ecf'/>
                </div>
                <div className='col-lg-2 col-md-3 col-4 mt-lg-0 mt-4'>
                <FaJsSquare  style={{fontSize:"90px"}} color="#EFD81D"/>
                </div>
                <div className='col-lg-2 col-md-3 col-4 mt-lg-0 mt-4'>
                <FaShopify style={{fontSize:"90px"}} color="#2d8c27"/>
                </div>
            </div>
            
        </div>
      </div>
      
    </div>
   <Skills/>
  
    </>
  )
}

export default About
