'use client'

import React, { useState } from 'react'
import Card from './Card'
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { AddtoCart } from '@/app/services/ProductServices';

export default function Tabing({ Productdata }) {


    // console.log(Productdata)
    const [ActiveTab, SetActiveTab] = useState('1');


    const [data, setdata] = useState([])
    const [path, setpath] = useState(Productdata._Path)

    let filteredData = Productdata?.productres?.filter(
        (item) => item._Prodcut_Type == ActiveTab
    );
    console.log(filteredData)

    return (
        <>
            <div className='max-w-[1200px] mx-auto py-3    '>

                <div className='flex justify-center items-center  '>

                    <div className="h-[2px] rounded-2xl sm:w-40 md:w-50 lg:w-60 bg-gradient-to-l from-neutral-300/50 via-neutral-300/20 to-transparent"></div>

                    <div className='flex gap-0 font-serif'>
                        <button id='tab1' onClick={() => SetActiveTab('1')} className={`border-2 hover:text-yellow-600 ${ActiveTab === '1' ? ' border-yellow-600 text-yellow-600' : 'border-neutral-300'} py-2 px-6 text-xl font-semibold cursor-pointer   `}  >Featured</button>
                        <button id='tab2' onClick={() => SetActiveTab('2')} className={`border-2 hover:text-yellow-600 ${ActiveTab === '2' ? ' border-yellow-600 text-yellow-600' : 'border-neutral-300'} py-2 px-6 text-xl font-semibold cursor-pointer  `}  > New Arrivals </button>
                        <button id='tab3' onClick={() => SetActiveTab('3')} className={`border-2 hover:text-yellow-600 ${ActiveTab === '3' ? ' border-yellow-600 text-yellow-600' : 'border-neutral-300'} py-2 px-6 text-xl font-semibold cursor-pointer  `}  >Onsale</button>
                    </div>

                    <div className="h-[2px] rounded-2xl sm:w-40 md:w-50 lg:w-60 bg-gradient-to-r from-neutral-300/50 via-neutral-300/20 to-transparent"></div>
                </div>










                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6  '>


                    {filteredData?.map((item, i) => (

                        <div className=' w-70 h-100 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <Link href={`/product-details/${item._Slug}`} >  <img className=' w-full h-[50%]' src={path + item._image} alt="carmonia" /></Link>
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]' >  {item._PerentCategory?._CategoryName} </p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300  hover:text-yellow-600 duration-300'> {item._ProductName} </h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  {item._Product_Original_Price
                            }</span> <span className='font-bold text-yellow-500' >Rs  : {item._Product_Discount_Price}</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button onClick={()=>AddtoCart(item._id)} className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                    ))}


                </div>







            </div>

        </>
    )
}
