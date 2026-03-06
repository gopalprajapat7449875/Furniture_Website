import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export default function Card() {
    return (
        <>
            <div className=' w-55 h-80 mx-2 my-4 rounded  shadow-[0_0_15px_rgba(0,0,0,0.25)] text-center  font-serif'>

                <img className=' w-full' src="carmonia.jpg" alt="carmonia" />
                <div className='py-3 leading-8'>

                    <p className='text-neutral-400 text-[11px]'>Nest Of Tables</p>
                    <h5 className='text-[14px] font-semibold'>Caroline Study Tables</h5>
                </div>

                <div className='h-[1px] flex  mx-auto w-60 rounded-3xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent '>  </div>
                <p className='flex justify-center gap-3 text-[13px] py-2 '> <span className='line-through text-neutral-400' > Rs  :  1000</span> <span className='font-bold text-yellow-500' >Rs  :  800</span></p>

                <div className=' flex gap-2 pt-2 items-center justify-center'>
                    <button className=' relative py-1 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200 '>
                        <FaRegHeart
                            className=' text-xl' />
                        <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-7 text-[12px] font-bold text-yellow-500 hidden'> Add to Wishlist  </div>
                    </button>
                    <button className=' relative py-1 px-2  bg-neutral-100 hover:bg-yellow-600 group duration-300 transition-5s cursor-pointer duration-200  text-[14px]'>
                        Add to cart <div className=' group-hover:block  absolute w-30 py-1 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.25)] -top-10 bg-white -left-4 text-[12px] font-bold text-yellow-500 hidden'> Add to Cart </div>
                    </button>
                </div>
            </div>

        </>
    )
}
