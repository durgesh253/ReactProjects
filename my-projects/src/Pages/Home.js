import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Button from '@mui/material/Button';
import Services from '../components/Services';
import Trusted from '../components/Trusted';
function Home() {
  return (
   <>
   <div className='position-relative ' id='home-page'>
   <Carousel
   showThumbs={false}
   autoPlay={true}
   transitionTime={3}
   infiniteLoop={true}
   showStatus={false} className='position-relative'>
                <div>
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"100%" , height:"80vh" ,fontFamily: "Courier"}}/>
            <div class="item image-overlay">
              <p class="text-tag text-light">Industrial</p>
              <h3 class="title-hero-19 mb-4 text-light"> Great Technology Best Services</h3>
              <p class="hnypara text-light">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper
                at tempufddfel. Lorem ipsum dolor sit amet elit. </p>
              <div class="w3banner-buttons ">
              <Button variant="contained" className='m-2'>Read More </Button>
              <Button variant="contained">Read More </Button>
                
              </div>
            </div>
          </div>
                <div>
                    <img src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"100%" , height:"80vh" ,fontFamily: "Courier" }}/>
                    <div class="item image-overlay">
              <p class="text-tag text-light">Industrial</p>
              <h3 class="title-hero-19 mb-4 text-light"> Great Technology Best Services</h3>
              <p class="hnypara text-light">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper
                at tempufddfel. Lorem ipsum dolor sit amet elit. </p>
              <div class="w3banner-buttons">
              <Button variant="contained" className='m-2'>Read More </Button>
              <Button variant="contained">Read More </Button>
                
              </div>
            </div>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"100%" , height:"80vh" ,fontFamily: "Courier" }} />
                    <div class="item image-overlay">
              <p class="text-tag text-light">Industrial</p>
              <h3 class="title-hero-19 mb-4 text-light"> Great Technology Best Services</h3>
              <p class="hnypara text-light">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper
                at tempufddfel. Lorem ipsum dolor sit amet elit. </p>
              <div class="w3banner-buttons">
              <Button variant="contained" className='m-2'>Read More </Button>
              <Button variant="contained">Read More </Button>
                
              </div>
            </div>
                </div>
            </Carousel>
            </div>
             {/* <Services/>  */}
            <Trusted/>
            
   </>
  )
}

export default Home
