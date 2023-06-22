import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logod from '../Componants/logo1.png'

function Navbar() {
  return (
   <>
   {/* <div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={logod} alt='logo' />
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
   </div> */}
   </>
  )
}

export default Navbar
