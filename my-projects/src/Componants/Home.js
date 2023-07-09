import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import profile from './image1.png'

    
function Home() {
 
  return (
    <>
   <section id="home" className="w3l-banner py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-sm-12 mt-lg-0 mt-4">
        <span className="title-small text-light">Hello</span>
        <h1 className="mb-2 title"> <span>I'm</span> Durgesh jadhav</h1>
        <h1 style={{ fontWeight: 'normal' }}>
        a{' '}
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Web Devloper', 'ReactJs Devloper']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
      </h1>
        <p>As a web developer, I have a strong foundation in HTML, CSS, and JavaScript, along with expertise in Bootstrap and React.js. With these skills, I can create dynamic, responsive, and visually appealing websites that provide an exceptional user experience.</p>
        <div className="mt-sm-5 mt-4">
          <Link className="btn btn-primary btn-style mr-2" to='/' style={{marginRight:"10px"}}> Hire Me </Link>
          <Link className="btn btn-outline-primary btn-style mr-2" to='/'> Portfolio </Link>
        </div>
      </div>
      <div className="col-lg-6 col-md-8 col-sm-10 mt-lg-0 mt-4">
        <div className="img-effect text-lg-center">
          
          <img src={profile} alt="" className='img-fluid' />
          
        </div>
      </div>
    </div>
  </div>
</section>



    </>
    
  )
}

export default Home
