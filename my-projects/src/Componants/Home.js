import React from 'react'
import graph from './graph.png'
import { Link } from 'react-router-dom'

    
function Home() {
  return (
    <>
   <section id="home" className="w3l-banner py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
        <span className="title-small">Hello</span>
        <h1 className="mb-2 title"> <span>I'm</span> Durgesh jadhav</h1>
        <h1 className="mb-4 title"> a <span className="typed-text" /><span className="cursor">&nbsp;</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.
          Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac
          cursus quis, non leo.</p>
        <div className="mt-sm-5 mt-4">
          <Link className="btn btn-primary btn-style mr-2" to='/' style={{marginRight:"10px"}}> Hire Me </Link>
          <Link className="btn btn-outline-primary btn-style mr-2" to='/'> Portfolio </Link>
        </div>
      </div>
      <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
        <div className="img-effect text-lg-center">
          <img src={graph} alt="myphoto" className="img-fluid" />
          
        </div>
      </div>
    </div>
  </div>
</section>



    </>
    
  )
}

export default Home
