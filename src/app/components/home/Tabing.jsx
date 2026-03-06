'use client'

import React, { useState } from 'react'
import Card from './Card'
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function Tabing() {
    const [ActiveTab, SetActiveTab] = useState("tab1");

    return (
        <>
            <div className='max-w-[1200px] mx-auto py-3    '>

                <div className='flex justify-center items-center  '>

                    <div className="h-[2px] rounded-2xl sm:w-40 md:w-50 lg:w-60 bg-gradient-to-l from-neutral-300/50 via-neutral-300/20 to-transparent"></div>

                    <div className='flex gap-0 font-serif'>
                        <button id='tab1' onClick={() => SetActiveTab("tab1")} className={`border-2 hover:text-yellow-600 ${ActiveTab === 'tab1' ? ' border-yellow-600 text-yellow-600' : 'border-neutral-300'} py-2 px-6 text-xl font-semibold cursor-pointer   `}  >Featured</button>
                        <button id='tab2' onClick={() => SetActiveTab("tab2")} className={`border-2 hover:text-yellow-600 ${ActiveTab === 'tab2' ? ' border-yellow-600 text-yellow-600' : 'border-neutral-300'} py-2 px-6 text-xl font-semibold cursor-pointer  `}  > New Arrivals </button>
                        <button id='tab3' onClick={() => SetActiveTab("tab3")} className={`border-2 hover:text-yellow-600 ${ActiveTab === 'tab3' ? ' border-yellow-600 text-yellow-600' : 'border-neutral-300'} py-2 px-6 text-xl font-semibold cursor-pointer  `}  >Onsale</button>
                    </div>

                    <div className="h-[2px] rounded-2xl sm:w-40 md:w-50 lg:w-60 bg-gradient-to-r from-neutral-300/50 via-neutral-300/20 to-transparent"></div>
                </div>








                {ActiveTab === 'tab1' &&

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6  '>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                           <Link href={'/product-details'} >  <img className=' w-full' src="carmonia.jpg" alt="carmonia" /></Link>
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="16253179270591620747711033Hardwell Temple Prayer Unit__.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="16253167208651620078433247Louise Cabinet_.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1663996596738Group 1.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1663411513681Group 1.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1661762520951Group 1.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1661502549484Group 1.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                    </div>
                }

                {ActiveTab === 'tab2' &&

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6 '>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1621171973378Isaac Chest of Drawer_.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1620666061907Gloria Shoe Racks_.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1620077669499Erica Bookshelfs_brown.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1619988418966Leo TV Cabinets.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1617989633213Winona Mirror__.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1617981904164Hrithvik Stool__.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1617829892944Evan Coffee Table__.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                    </div>
                }

                {ActiveTab === 'tab3' &&

                     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-6 '>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1617828302132Godfrey Coffee Table Set__.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1617816851291Calina Swing Jhula__.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1615277326496Sapien Sofa Cum Bed__.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1615225341228Ganthur Sheesham Wood Sofa Set___.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>
                        <div className=' w-70 h-90 my-5 shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                            <img className=' w-full' src="1608312103476Dorian Shoe Rack_.jpg" alt="carmonia" />
                            <div className='py-3 leading-8'>

                                <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                                <h5 className='text-[15px] font-semibold  hover:text-yellow-600 duration-300 hover:cursor-pointer  hover:text-yellow-600 duration-300'>Caroline Study Tables</h5>
                            </div>

                            <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                            <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                            <div className=' flex gap-2 items-center justify-center'>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                                    <FaRegHeart
                                        className=' text-xl' />
                                    <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-14 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                                </button>
                                <button className=' relative py-2 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                                    Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                                </button>
                            </div>
                        </div>


                    </div>
                }




            </div>

        </>
    )
}
