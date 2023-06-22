import React from 'react'
    

import { Link, NavLink } from 'react-router-dom'
import logod from '../Componants/logo1.png'
import profile from '../Componants/profile5.png'
import graph from '../Componants/graph.png'
function Home() {
  return (
    <div className='container pt-lg-5 pt-md-4'>
      <div className="home row pt-lg-2 pt-4">
        <div className="col-lg-7 pt-lg-0 pt-5">

        <div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={logod} alt='logo' id='logo1' />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname='active' to='/'>
        <span class="fa-solid fa-house" style={{color : "white"}}></span>
        </NavLink>
        <NavLink exact="true" activeclassname='active' to='/'>
        <i class="fa-solid fa-user"></i>
        </NavLink>
        <NavLink exact="true" activeclassname='active' to='/'>
        <i class="fa-solid fa-envelope"></i>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a href="" className='a-deco'>
            <i class="fa-brands fa-linkedin-in"></i>
            </a>
        </li>
        <li>
            <a href="" className='a-deco'>
            <i class="fa-brands fa-github"></i>
            </a>
        </li>
        <li>
            <a href="" className='a-deco'>
            <i class="fa-brands fa-whatsapp"></i>
            </a>
        </li>
        <li>
            <a href="" className='a-deco'>
            <i class="fa-brands fa-instagram"></i>
            </a>
        </li>
    </ul>
   </div>  
   <div className='container baner-grid'>
                <h1 className='mb-3'>Hi ,I'm Durgesh Jadhav</h1>
                <h3 className='mb-4'>
               <span className='typed-text'>Web Devloper</span>
               <span className='cursor typing'>&nbsp;</span>
               </h3>
               <p>I love Graphic design and Photography and have been working on my portfolio since 2023. I Can
                        give your business a new Creative start right away!</p>
            
               <a class="btn" href="#">Red More</a>
        </div>
        </div>
        
        <div className='col-lg-5 text-lg-end my-image  mt-lg-0 mt-4 img-fluid'>
            
            <img src={graph} className='shape img-fluid '/>
            <img src={profile} alt="" className='myprofile img-fluid ' />
           
        </div>
    </div> 
    </div>
    
  )
}

export default Home
