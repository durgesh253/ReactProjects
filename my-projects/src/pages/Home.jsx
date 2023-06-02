import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";




function Home() {

  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/4558557/pexels-photo-4558557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/1933318/pexels-photo-1933318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </SwiperSlide>
       
      </Swiper>
  </>
    
  )
}

export default Home
