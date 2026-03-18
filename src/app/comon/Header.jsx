'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenuFoldLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setopen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 125) {
        setScrolled(true)
      } else if (window.scrollY <= 125) {
        setScrolled(false)
      }
    })

  }, [])
  return (

    <>
      <div className='w-full  bg-white '>



        <div className=' sm:px-2 md:px-4 '>
          <div className='w-full  bg-white  border-b border-neutral-200'>

            <div className='max-w-[1200px] mx-auto py-3 hidden lg:flex flex justify-between items-center text-[12px] text-neutral-800 font-medium'>

              <p>Contact us 24/7 :<a href="tel:+919876543210">+919876543210</a> /
                <a href="furnitureinfo@gmailcom">furnitureinfo@gmail.com</a>
              </p>

              <p
                className=' hover:text-yellow-600  duration-250 '
              >
                <Link href={'/checkout'}>  Login / Register</Link>
              </p>

            </div>
          </div>
          <div className='w-full  bg-white  border-b border-neutral-200'>

            <div className='max-w-[1200px] mx-auto py-5  flex   justify-between items-center text-[12px] px-3 md:px-4 text-neutral-800 font-medium'>

              <img className='w-34 ' src="logo.png" alt="Monsta" />

              <div className='flex gap-4 md:pe-4  items-center  sm:justify-center   '>


                <div className='hidden lg:flex md:flex flex items-center rounded py-2 px-2 gap-2  border border-neutral-200'>
                  <input className='outline-none lg:w-[250px] md:w-[150px] ' type="text" placeholder='search product...' />  <IoSearchSharp className='text-2xl font-extralight' />

                </div>

                <button className='  border border-neutral-200 sm:text-left py-2.5 px-2.5 text-xl rounded' >  <Link href={'/my-wishlist'} >
                  <FaHeart className=' hover:text-yellow-600 cursor-pointer duration-200 ' /></Link>
                </button>

                <div className='flex relative sm:justify-start ml-1 items-center py-2.5 px-4 text-[18px] font-semibold px-1 rounded border hover:text-yellow-600 duration-200 border-neutral-200'>
                  <button className=' border-neutral-200 md:border-r border-neutral-200 pr-2 cursor-pointer'>  <Link href={'/my-cart'} ><FaCartShopping /></Link>
                  </button>


                  <button className='flex hidden md:flex items-center gap-3 px-2 text-[12px] cursor-pointer '>Rs.0.00   <FaAngleDown />

                  </button>
                  <div className=' absolute w-4 h-4 rounded-[50%] -left-2 top-3 bg-yellow-600 flex justify-center items-center text-[12px] text-white' > 0</div>


                </div>
              </div>

              <div className='  lg:hidden sm:flex md:flex border-1 border-neutral-500 rounded p-1.5 sm:mr-3 md:mr-4  '>
                <RiMenuFoldLine className='w-6 h-6 font-semibold hover:text-yellow-600 hover:cursor-pointer' onClick={() => setopen(true)} />

              </div>




            </div>



          </div>

          <div className={` w-full  hidden lg:flex left-0  bg-white ${scrolled && '   bg-white lg:fixed top-0 z-20 py-1 duration-500'} border-b border-neutral-200`}>

            <div className={`max-w-[1200px] mx-auto   text-center `}>


              <ul className='flex uppercase justify-center items-center gap-10 text-[12px] font-semibold' >
                <li className={`max-w-24 ${scrolled ? ' mx-5 block' : 'hidden'}  `}>  <img className='w-full' src="logo.png" alt="Monsta" /></li>

                <Link href={'/'}>
                  <li className='text-yellow-600 hover:cursor-pointer duration-250 py-5'>Home</li>
                </Link>

                <li className='text-neutral-500 py-5 hover:cursor-pointer duration-900 relative group hover:  hover:text-yellow-600 flex items-center gap-2'>living  <FaAngleDown />
                  <div className={`bg-white w-140   text-black origin-top absolute z-9 -left-10  top-[58px] -skew-x-15 rotate-x-90 duration-600  group-hover:rotate-x-0 group-hover:skew-x-0 `}>
                    <div className='grid grid-cols-3 '>

                      <div className='py-2 px-5 text-left leading-14   '>
                        <h4 className='hover:text-yellow-600'>Tables</h4>
                        <ul className='text-neutral-500 text-[11px] capitalize leading-7 '>
                          <li className='hover:text-yellow-600'>Side and End Tables</li>
                          <li className='hover:text-yellow-600'>Nest Of Tables</li>
                          <li className='hover:text-yellow-600'>Coffee Table Sets</li>
                          <li className='hover:text-yellow-600'>Coffee Tables</li>
                        </ul>
                      </div>
                      <div className='py-2 px-4 text-left leading-14   '>
                        <h4 className='hover:text-yellow-600'>Mirror</h4>
                        <ul className='text-neutral-500 text-[11px] capitalize leading-7'>
                          <li className='hover:text-yellow-600'>Wooden Mirrors</li>

                        </ul>
                      </div>
                      <div className='py-2 px-4 text-left    '>
                        <h4 className='hover:text-yellow-600 py-4'>Living <br /> Storage/collections</h4>
                        <ul className='text-neutral-500 text-[11px] capitalize leading-7 '>
                          <li className='hover:text-yellow-600'>Prayer Units</li>
                          <li className='hover:text-yellow-600'>Display Unit</li>
                          <li className='hover:text-yellow-600'>Shoe Racks</li>
                          <li className='hover:text-yellow-600'>Chest Of Drawers</li>
                          <li className='hover:text-yellow-600'>Cabinets and Sideboard</li>
                          <li className='hover:text-yellow-600'>Bookshelves</li>
                          <li className='hover:text-yellow-600'>Tv Units</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='text-neutral-500 py-5 hover:cursor-pointer duration-250  hover:text-yellow-600 flex items-center gap-2 relative group hover:'> sofa  <FaAngleDown />
                  <div className='bg-white w-140    text-black origin-top absolute z-9 -left-10  top-[58px] -skew-x-15 rotate-x-90 duration-600 group-hover:rotate-x-0 group-hover:skew-x-0'>
                    <div className='grid grid-cols-3 '>

                      <div className='py-2 px-5 text-left leading-14   '>
                        <h4 className='hover:text-yellow-600'>Tables</h4>
                        <ul className='text-neutral-500 text-[11px] capitalize leading-7 '>
                          <li className='hover:text-yellow-600'>Side and End Tables</li>
                          <li className='hover:text-yellow-600'>Nest Of Tables</li>
                          <li className='hover:text-yellow-600'>Coffee Table Sets</li>
                          <li className='hover:text-yellow-600'>Coffee Tables</li>
                        </ul>
                      </div>
                      <div className='py-2 px-4 text-left leading-14   '>
                        <h4 className='hover:text-yellow-600'>Mirror</h4>
                        <ul className='text-neutral-500 text-[11px] capitalize leading-7'>
                          <li className='hover:text-yellow-600'>Wooden Mirrors</li>

                        </ul>
                      </div>
                      <div className='py-2 px-4 text-left    '>
                        <h4 className='hover:text-yellow-600 py-4'>Living <br /> Storage/collections</h4>
                        <ul className='text-neutral-500 text-[11px] capitalize leading-7 '>
                          <li className='hover:text-yellow-600'>Prayer Units</li>
                          <li className='hover:text-yellow-600'>Display Unit</li>
                          <li className='hover:text-yellow-600'>Shoe Racks</li>
                          <li className='hover:text-yellow-600'>Chest Of Drawers</li>
                          <li className='hover:text-yellow-600'>Cabinets and Sideboard</li>
                          <li className='hover:text-yellow-600'>Bookshelves</li>
                          <li className='hover:text-yellow-600'>Tv Units</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='  hover:text-yellow-600 py-5 hover:cursor-pointer duration-250 flex items-center gap-2 relative group hover:'>pages  <FaAngleDown />
                  <div className='bg-white  w-50 text-black origin-top absolute z-9 -left-10  top-[58px] -skew-x-15 rotate-x-90 duration-600 group-hover:rotate-x-0 group-hover:skew-x-0'>

                    <div className='py-3 px-5 text-left    '>

                      <ul className='text-neutral-500 text-[11px] capitalize leading-7 '>
                        <li className='hover:text-yellow-600'><Link href={'/about-us'} > About Us</Link></li>
                        <li className='hover:text-yellow-600'><Link href={'/my-cart'} >Cart </Link> </li>
                        <li className='hover:text-yellow-600'><Link href={'/checkout'} > Checkout </Link></li>
                        <li className='hover:text-yellow-600'><Link href={'/faq-page'} > Frequently Questions </Link> </li>
                      </ul>
                    </div>


                  </div>
                </li>
                <li className=' hover:text-yellow-600 py-5 hover:cursor-pointer duration-250 '> <Link href={'/contact-us'}> contact us </Link> </li>
              </ul>

            </div>


          </div>

        </div>

        <div onClick={() => setopen(false)} className={`sm:w-55 md:w-70    ${open ? 'translate-x-0' : '-translate-x-[100%]'} duration-500 ease-in-out bg-white fixed  top-0 overflow-y-auto  z-30 h-[100%]`}>
          <div className='flex justify-end flex-col  w-full  py-8 px-5'>

            <div className='flex justify-end items-end'>
              <div className='flex  sm:w-7 sm:h-7   md:w-9 md:h-9 border-1 border-neutral-300 rounded-[50%]'>
                <RxCross2 className='sm:text-xl md:text-2xl mx-auto my-auto font-extrabold' onClick={() => setopen(false)} />
              </div>

            </div>
            <div className='text-center py-4 text-[13px]  text-neutral-600'>

              <p className='pb-4'>Contact us 24/7 :<a href="tel:+919876543210">+919876543210</a> </p>
              <a href="furnitureinfo@gmailcom">furnitureinfo@gmail.com</a>


            </div>


            <div>
              <ul className='flex text-neutral-600 flex-col uppercase  text-[13px] font-semibold' >

                <Link href={'/'}>
                  <li className=' hover:cursor-pointer duration-250 py-5'>Home</li>
                </Link>

                <li className=' flex border-b border-neutral-200 justify-between items-center py-5 hover:cursor-pointer  group hover:  hover:text-yellow-600 flex items-center gap-2'>living  <FaAngleDown />

                </li>
                <li className=' py-5  border-b border-neutral-200  flex justify-between  items-center hover:cursor-pointer  hover:text-yellow-600 flex items-center gap-2 relative group hover:'> sofa  <FaAngleDown />

                </li>
                <li className='   py-5  border-b border-neutral-200  flex justify-between  items-center hover:cursor-pointer  flex items-center gap-2  group '>pages  <FaAngleDown />

                </li>
                <li className='  py-5 hover:cursor-pointer  '> <Link href={'/contact-us'}> contact us </Link> </li>
              </ul>
            </div>


          </div>

        </div>



      </div >


    </>
  )
}
