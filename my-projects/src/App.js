import React, { useState } from 'react'
import reviews from './data';
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
function App() {
  const [index,setindex] =  useState(2);
  const {name,id,job,image,text} = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const handleleft = () => {
   setindex((index) => {
     let newindex = index + 1;
     return checkNumber(newindex)
   })
  }
  const handleright = () => {
    setindex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex)
    })
   }

   const ramdomperson = () => {
    let randomnumber = Math.floor(Math.random() * reviews.length);
    console.log(randomnumber);
    if(randomnumber === index){
      randomnumber = index + 1;
    }
    setindex(checkNumber(randomnumber))

   }
  return (
    <>
      
   <section className=" py-5" id="testimonials">
  <div className="container py-sm-5 py-2 HomePageTestimonials">
    <div className="text-center mb-sm-5 mb-4">
      <h6 className="w3l-title-small mb-2">Testimonials</h6>
      <h3 className="w3l-title-main mb-2">What people say about us</h3>
    </div>
    <div className=" align-items-center pt-md-4 bg-light text-black shadow">
      <div className="w3-testimonial-content-top">
        <div id="owl-demo1" className="owl-carousel owl-theme">
          <div className="item">
            <div className="testimonial-content">
              <div className="test-img">
                <img src={image} className="p-3"style={{width:"150px",height:"150px"}} alt="" />
              </div>
              <div className="testimonial">
                <blockquote>
                  <q>
                   {text}</q>
                </blockquote>
                <div className="testi-des">
                  <div className="peopl align-self">
                    <h3>{name}</h3>
                    <p className="indentity">{job}</p>
                  </div>
                  <div style={{fontSize:"30px"}}>
                    <FaAngleLeft onClick={handleleft}/>
                    <FaAngleRight onClick={handleright}/>
                  </div>
                  <button className='btn btn-secondary mb-3' onClick={ramdomperson}>surprice me</button>
                </div>
              </div>
            </div>
          </div>
        </div></div></div></div></section>

    </>
  )
}

export default App
