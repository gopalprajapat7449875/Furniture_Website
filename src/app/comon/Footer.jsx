import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer() {
  return (
    <div>
      <div className='max-w-[1200px] py-15  border-b border-neutral-200  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        <div className=' flex flex-col ps-4'>
          <h5 className='text-xl font-semibold font-serif '>
            Contact Us
          </h5>
          <p className='text-[13px]  text-neutral-500 py-2'>Address: Claritas est etiam processus dynamicus</p>
          <p className='text-[13px]  text-neutral-500 py-2'  >Phone: <a className='hover:text-yellow-600 cursor-pointer' href="tel:+919876543210">+919876543210</a> </p>
          <p className='text-[13px]  text-neutral-500 py-2'>Email: furnitureinfo@gmail.com</p>
          <div className='flex items-center gap-2 py-3'>
            <div className='w-10 h-10 border-neutral-300 rounded-[50%] flex border-1 justify-around  text-neutral-500  items-center hover:border-yellow-600 hover:text-yellow-600 duration-500 '>
              <FaFacebookF className='text-[18px]' />

            </div>
            <div className='w-10 h-10 border-neutral-300 rounded-[50%] flex border-1 justify-around  text-neutral-500  items-center hover:border-yellow-600 hover:text-yellow-600 duration-500 '>
              <FaInstagram className='text-[18px]' />



            </div>
            <div className='w-10 h-10 border-neutral-300 rounded-[50%] flex border-1 justify-around  text-neutral-500  items-center hover:border-yellow-600 hover:text-yellow-600 duration-500 '>

              <FaTwitter className='text-[18px]' />

            </div>
            <div className='w-10 h-10 border-neutral-300 rounded-[50%] flex border-1 justify-around  text-neutral-500  items-center hover:border-yellow-600 hover:text-yellow-600 duration-500 '>
              <FaLinkedinIn className='text-[18px]' />


            </div>
            <div className='w-10 h-10 border-neutral-300 rounded-[50%] flex border-1 justify-around  text-neutral-500  items-center hover:border-yellow-600 hover:text-yellow-600 duration-500 '>

              <FaYoutube className='text-[18px]' />

            </div>
            <div className='w-10 h-10 border-neutral-300 rounded-[50%] flex border-1 justify-around  text-neutral-500  items-center hover:border-yellow-600 hover:text-yellow-600 duration-500 '>

              <FaTelegram className='text-[18px]' />

            </div>

          </div>

        </div>

        <div className='grid grid-cols-2 gap-2'>

          <div>
            <h5 className='text-xl pb-2 font-semibold font-serif '>
              Information
            </h5>
            <p className='text-[13px]  text-neutral-500 py-1 hover:text-yellow-600 hover:cursor-pointer'>  <Link href={'/about-us'} > About Us</Link> </p>
            <p className='text-[13px]  text-neutral-500 py-1 hover:text-yellow-600 hover:cursor-pointer'  >  <Link href={'/contact-us'} > Contact Us </Link> </p>
            <p className='text-[13px]  text-neutral-500 py-1 hover:text-yellow-600 hover:cursor-pointer'> <Link href={'/faq-page'} > Frequently Questions </Link>  </p>
          </div>
          <div>
            <h5 className='text-xl pb-2 font-semibold font-serif '>
              My Account

            </h5>
            <p className='text-[13px]  text-neutral-500 py-1 hover:text-yellow-600 hover:cursor-pointer'>  <Link href={'/'} >My Dashboard</Link> </p>
            <p className='text-[13px]  text-neutral-500 py-1 hover:text-yellow-600 hover:cursor-pointer'  >  <Link href={'/my-wishlist'} >Wishlist</Link> </p>
            <p className='text-[13px]  text-neutral-500 py-1 hover:text-yellow-600 hover:cursor-pointer'> <Link href={'/my-cart'} >Cart </Link>  </p>

            <p className='text-[13px]  text-neutral-500 py-1 hover:text-yellow-600 hover:cursor-pointer'> <Link href={'/checkout'} > Checkout </Link>  </p>
          </div>
        </div>

        <div>
          <h5 className='text-xl  pb-5 font-semibold font-serif '>Top Rated Products</h5>
          <div className='grid grid-cols-4 border-b border-neutral-200 pb-2 '>
            <div className='col-span-1  '>
              <img className="object-center object-cover " src="1663996596738Group 1.jpg" alt="furniture" />
            </div>
            <div className='col-span-3 py-1 ps-5  ' >
              <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
              <h5 className='text-[16px] text-neutral-500 hover:text-yellow-600 cursor-pointer font-semibold'>Caroline Study Tables</h5>
              <p className='flex  gap-3 text-[15px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

            </div>
          </div>
          <div className='grid grid-cols-4 pb-2 pt-4 '>
            <div className='col-span-1  '>
              <img className=" " src="16253167208651620078433247Louise Cabinet_.jpg" alt="furniture" />
            </div>
            <div className='col-span-3 py-1 ps-5  ' >
              <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
              <h5 className='text-[16px] text-neutral-500 hover:text-yellow-600 cursor-pointer font-semibold'>Caroline Study Tables</h5>
              <p className='flex  gap-3 text-[15px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

            </div>
          </div>

        </div>




      </div>
      <div className='max-w-[1200px] py-3   border-b border-neutral-200 flex justify-center   mx-auto '>
        <ul className='text-neutral-600 capitalize flex gap-15 text-[15px]'>
          <li className='hover:text-yellow-600'>
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li className='hover:text-yellow-600'>
            <Link href={'/online-store'}>
              Online Store
            </Link>
          </li>
          <li className='hover:text-yellow-600'>
            <Link href={'/privacy-policy'}>
              Privacy Policy
            </Link>
          </li>
          <li className='hover:text-yellow-600'>
            <Link href={'/terms-of-use'}>
              Terms Of Use
            </Link>
          </li>

        </ul>
      </div>
      <div className='w-full py-10 flex flex-col text-neutral-600 capitalize text-[13px]  items-center '>
        <p className='py-2'>
          All Rights Reserved By Furniture | © 2026
        </p>
        <div className='py-4'>
          <img src='papyel2.png' alt='papyel2' />

        </div>
      </div>

    </div>
  )
}
