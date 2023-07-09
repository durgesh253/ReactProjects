import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
   <section className="w3l-footer py-sm-5 py-4" style={{backgroundColor:"black"}}>
  <div className="container">
    <div className="footer-content">
      <div className="row">
        <div className="col-lg-8 footer-left">
          <p className="m-0">DurgeshJ © Copyright 2023. Design by <a href="https://google.com" style={{textDecoration:"none"}}>DJadhav</a></p>
        </div>
        <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3 ">
          <ul className="social m-0 p-0 d-flex" style={{listStyleType:"none",gap:"20px"}}>
          
            <li><a href="#linkedin"><LinkedInIcon fontSize='large' color='#407cad'/></a></li>
            <li><a href="#instagram"><InstagramIcon fontSize='large' style={{color:"#b80f5b"}}/></a></li>
            <li><a href="#twitter"><GitHubIcon fontSize='large' className='text-light'/></a></li>
            <li><Link to=''><FacebookIcon fontSize='large' className='' style={{color:"#5faee3"}}/></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default Footer
