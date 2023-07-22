import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function About() {
  return (
    <>
   <div className='about-baner text-center'>
    <div className='inner-baner py-5'>
      <div className='container py-lg-5 py-md-4'>
        <div className='baner-info px-md-5'>
          <h2 className='title-ab mb-3'>About Us</h2>
          <p className='about-para px-lg-5'>
         "Feel free to learn more about our team and company on this page. We are always happy to help you!1"
          </p>

        </div>

      </div>

    </div>
   </div>
   <div className='container py-md-5 py-2 pb-0'>
    <div className='second-row text-center'>
      <div className='title-content'>
        <h6 className='text-danger pt-3'>Our Info</h6>
        <h3 className='text-dark' style={{fontWeight:"900" ,textTransform: "uppercase"}}>About Our Djs Shoping</h3>
      </div>
      <p className='mt-3'>
      "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
                    elit ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non ipsum soluta perferendis veniam qui esse magnam commodi quisquam."
      </p>
      <button className='btn btn-dark'>Red More</button>
    </div>

   </div>
   <section className='row3 py-5'>
     <div className='container py-md-3'>
      <div className='inner-row3'>
        <div className='row d-flex'>
          <div className='col-lg-7'>
            <div className='pg-lg-5'>
              <h6 className='mb-1'>
                "Our Special Offer"
              </h6>
              <h3 className='mb-4'>
              Up To 60% Off Now 
              <br />
              Enjoy The Season Sale
                                
              </h3>
            </div>
          </div>
          <div className='col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4'>
            <div className='justify-content-end d-sm-flex'>
              <button className='btn btn-danger'>Conatct Us</button>
            </div>
          </div>

        </div>
      </div>
     </div>
   </section>
    
      
    </>
  )
}

export default About
