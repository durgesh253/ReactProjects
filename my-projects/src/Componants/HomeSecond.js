import React from 'react'
import profile from './profile.jpeg'

function HomeSecond() {
  return (
    <> 
   
   <section className="w3l-index3" id="about">
  <div className="midd-w3 py-5">
    <div className="container py-lg-5 py-md-3">
      <div className="row">
        <div className="col-lg-4">
          <div className="position-relative">
            <img src={profile} alt className="radius-image img-fluid" />
          </div>
        </div>
        <div className="col-lg-8 mt-lg-0 mt-5">
          <h5 className="title-small mb-2 ">Who am i?</h5>
          <h3 className="title-big">I'm Durgesh Jadhav, a Web Developer</h3>
          <p className="mt-4 ">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Non quae, fugiat consequatur voluptatem nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Dolor ipsum non velit reprehenderit, molestias
            culpa!</p>
          <a href="#download" className="btn btn-style btn-primary mt-lg-5 mt-4">Download CV</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HomeSecond
