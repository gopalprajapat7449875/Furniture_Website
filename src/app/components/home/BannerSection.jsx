'use client'

import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSection() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const bannerArray = ['/baner.jpg','/baner2.jpg','/baner3.jpg']

  return (
    <div className="w-full h-[420px] overflow-hidden">
      <Slider {...settings}>
        {bannerArray.map((v,i)=>(
          <div key={i} className="w-full h-[420px]">
            <img
              src={v}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}