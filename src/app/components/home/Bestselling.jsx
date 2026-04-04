
'use client'
import React, { useRef } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Slider from 'react-slick'
import Card from './Card'

export default function Bestselling() {

  const sliderRef = useRef(null);



  var settings = {
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    infinite: true,
    accessibility: true,
    slidesToShow: 5,
    autoplaySpeed: 2500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='font-serif max-w-[1200px] py-5  my-5 mx-auto'>

        <div className='flex justify-between items-center '>
          <h3 className='text-2xl  font-semibold'>
            Bestselling Products

          </h3>

          <div className='h-[2px]  rounded-3xl w-[880px] bg-neutral-200 px-1 '>

          </div>
          <div className='flex gap-1'>
            <GrFormPrevious className='text-2xl text-neutral-600 hover:text-yellow-600 cursor-pointer duration-300' onClick={() => sliderRef.current.slickPrev()} />
            <GrFormNext className='text-2xl text-neutral-600 hover:text-yellow-600 cursor-pointer duration-300' onClick={() => sliderRef.current.slickNext()} />


          </div>
        </div>
        <div className='px-2 py-3'>
          <Slider className='' ref={sliderRef} {...settings}>



            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />


          </Slider>
        </div>
      </div>
    </>
  )
}
