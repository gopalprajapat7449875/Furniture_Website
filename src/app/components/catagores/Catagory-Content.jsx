'use client'
import React, { useState } from 'react'
import Card from '../home/Card'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

export default function CatagoryContent() {

    const[filter,setfilter] = useState(false)
    let filterarrey = ['Featured Products', 'New Arrivals', 'On sale', 'Best Sellings', 'Sort by price: low to high', 'Sort by price: high to low', 'Product Name: A to Z', 'Product Name: Z to A']


    return (
        <>
            <div className=" max-w-[1200px] mx-auto my-8 grid grid-cols-4 ">

                <div className=' px-3 py-2  col-span-1'>
                    <div className='max-w-full h-100 border-b-1 border-neutral-200 overflow-y-auto'>
                        <h4 className='text-[22px] text-neutral-800 pb-2 font-semibold font-serif'>Catagories</h4>
                        <h5 className='text-[16px] py-3 text-neutral-600 font-bold font-serif'>Tables</h5>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>
                        <h5 className='text-[16px] py-3 text-neutral-600 font-bold font-serif'>Mirror</h5>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>
                        <h5 className='text-[16px] py-3 text-neutral-600 font-bold font-serif'>Living Storage/collections</h5>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>

                        <div className='flex px-2 gap-3 items-center pb-2 text-[14px] text-neutral-400 font-semibold'>
                            <input type="checkbox" />
                            <p>Side and End Tables</p>
                        </div>



                    </div>
                </div>
                <div className='  col-span-3 pl-3'>
                    <div className='border flex justify-end items-center text-[13px] gap-3  text-neutral-500 font-semibold border-neutral-200 py-3 px-2'>
                        <p className='font-serif'>Sort By  :  </p> <div  onClick={()=>setfilter(!filter)} className=' cursor-pointer border-1 border-neutral-300 py-1 px-4 relative group flex items-center gap-2' > Sort By <IoIosArrowDown className={` ${filter?'rotate-x-180':'rotate-0'   } duration-300 `} />

                            <div className={`w-50 bg-white  ${filter ? 'scale-100' : 'scale-0'}  duration-200 ease-in origin-top-left   rounded absolute -left-0.5 top-7 border-1 border-neutral-200`}>
                                <ul>
                                    {
                                        filterarrey.map((v,i) => (
                                            <li key={i} className=' text-[13px] font-medium text-neutral-400 hover:bg-neutral-100  py-2 px-2 rounded  cursor-pointer' value={v}> {v} </li>
                                        ))
                                    }

                                </ul>
                            </div>


                        </div>
                        <p>
                            Showing 1–12 of 19 results
                        </p>
                    </div>

                    <div className='grid grid-cols-3 gap-3 '>

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
                </div>

            </div>
        </>
    )
}
