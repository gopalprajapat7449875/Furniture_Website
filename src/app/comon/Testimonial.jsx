"use client";

import Slider from "react-slick";

import { FaStar } from "react-icons/fa";

export default function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,


    };

    return (
         <div className='text-center p-6'>
          <h3 className='text-[26px] text-neutral-800 font-semibold font-serif -tracking-[0.05em]' >
            What Our Custumers Say ?
          </h3>
        <div className="p-6">
            <Slider className="" {...settings}>

                <div className=' max-w-[1200px] py-3 px-30  mx-auto flex flex-col justify-items-center  '>

                    <p className='text-[14px] text-neutral-700 font-medium '>
                        These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                    </p>
                    <div className="w-22 h-24  rounded-[50%] mt-3 flex items-center justify-center ">
                        <img className="w-full h-full  object-fill " src="/Kathy.jpg" alt="Kathy" />
                    </div>
                    <h6 className="text-[14px] font-serif font-semibold  font-medium py-2 ">Kathy Young</h6>
                    <p className="text-[12px] font-medium text-neutral-400 ">CEO of SunPark</p>
                    <ul className="flex items-center py-4 gap-0.5">
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>

                    </ul>



                </div>
                <div className=' max-w-[1200px] py-3 px-30  mx-auto flex flex-col justify-items-center  '>

                    <p className='text-[14px] text-neutral-700 font-medium '>
                        These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                    </p>
                    <div className="w-22 h-24  rounded-[50%] mt-3 flex items-center justify-center ">
                        <img className="w-full h-full  object-fill " src="/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" alt="Kathy" />
                    </div>
                    <h6 className="text-[14px] font-serif font-semibold  font-medium py-2 ">Kathy Young</h6>
                    <p className="text-[12px] font-medium text-neutral-400 ">CEO of SunPark</p>
                    <ul className="flex items-center py-4 gap-0.5">
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>


                    </ul>



                </div>
                <div className=' max-w-[1200px] py-3 px-30  mx-auto flex flex-col justify-items-center  '>

                    <p className='text-[14px] text-neutral-700 font-medium '>
                        These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
                    </p>
                    <div className="w-22 h-24 rounded-[50%] mt-3 flex items-center justify-center ">
                        <img className="w-full h-full  object-fill " src="/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" alt="Kathy" />
                    </div>
                    <h6 className="text-[14px] font-serif font-semibold  font-medium py-2 ">Kathy Young</h6>
                    <p className="text-[12px] font-medium text-neutral-400 ">CEO of SunPark</p>
                    <ul className="flex items-center py-4 gap-0.5">
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>
                        <li className="text-yellow-600"> <FaStar /> </li>


                    </ul>



                </div>

            </Slider>
        </div>
        </div>
    );
}
