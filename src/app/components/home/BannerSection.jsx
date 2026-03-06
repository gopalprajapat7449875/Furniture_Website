'use client'

import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function BannerSection() {

  const settings = {

    dots: true,
    dotsClass: "slick-dots",
    margin: 0,
    padding: 0,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,


  };


  let bannerarrey = ['baner.jpg', 'baner2.jpg', 'baner3.jpg']
  return (
    <>
      <div className="h-[420px] px-0 mx-0  max-w-full ">

        <Slider className='mx-0 px-0 relative w-full object-cover'  {...settings} >
          {bannerarrey.map((v, i) => (
            <img key={i} className="h-[420px]   w-full object-cover " src={v} alt="baner" />

          ))}

        </Slider>



      </div>
    </>
  )
}
