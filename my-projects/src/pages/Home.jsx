import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css"


// import required modules
import { Pagination } from "swiper";


function Home() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      };
    
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide><img src="https://images.pexels.com/photos/17048927/pexels-photo-17048927/free-photo-of-wood-light-road-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/16965658/pexels-photo-16965658/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/16846950/pexels-photo-16846950/free-photo-of-sea-beach-water-ocean.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/16962632/pexels-photo-16962632/free-photo-of-woman-in-long-dress-with-horse-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></SwiperSlide>
      </Swiper>


    </>
  )
}

export default Home
