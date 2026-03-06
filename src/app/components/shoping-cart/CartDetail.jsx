import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function CartDetail() {
  return (
    <>
      <div className=" max-w-[1200px] mx-auto   ">
        <div className="overflow-x-auto">
          <table className="min-w-full text-[15px]  rounded-lg">
            <thead className="bg-neutral-100 border-b-2 border-yellow-600 font-serif">
              <tr>
                <th className="py-3 px-4 text-center">Delete</th>
                <th className="py-3 px-4 text-center">Image</th>
                <th className="py-3 px-4 text-center">Product</th>
                <th className="py-3 px-4 text-center">Price</th>

                <th className="py-3 px-4 text-center">Quantity</th>

                <th className="py-3 px-4 text-center">Total</th>

              </tr>
            </thead>
            <tbody className=" ">
              <tr className=" border-b-1 border-neutral-200 ">
                <td className="py-3 h-40 my-auto   px-4 text-xl my-auto flex justify-center justify-items-center border-l-1 border-neutral-200 "> <RiDeleteBin5Line className='hover:text-yellow-600 my-auto  duration-300 cursor-pointer ' /> </td>
                <td className="py-3 px-4 w-65 h-40 text-center  border-x-1 border-neutral-200 "> <img className="object-center w-full h-full " src="1663996596738Group 1.jpg" alt="furniture" />
              </td>
                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 text-[13px] font-sans font-semibold ">Gloria Shoe Racks</td>
                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 "><span> Rs. {'2,900'} </span></td>

                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 flex gap-3 font-semibold font-serif text-[14px] justify-center items-center"> <p>Quantity</p> <input className='w-15 rounded outline-none py-1 border-neutral-200 border' type="number" /> </td>

                <td className="py-3 px-4 text-center"><span> Rs. {'2,900'} </span></td>

              </tr>
                <tr className=" border-b-1 border-neutral-200 ">
                <td className="py-3 h-40 my-auto   px-4 text-xl my-auto flex justify-center justify-items-center border-l-1 border-neutral-200 "> <RiDeleteBin5Line className='hover:text-yellow-600 my-auto  duration-300 cursor-pointer ' /> </td>
                <td className="py-3 px-4 w-65 h-40 text-center  border-x-1 border-neutral-200 "> <img className="object-center w-full h-full " src="1663996596738Group 1.jpg" alt="furniture" />
              </td>
                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 text-[13px] font-sans font-semibold ">Gloria Shoe Racks</td>
                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 "><span> Rs. {'2,900'} </span></td>

                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 flex gap-3 font-semibold font-serif text-[14px] justify-center items-center"> <p>Quantity</p> <input className='w-15 rounded outline-none py-1 border-neutral-200 border' type="number" /> </td>

                <td className="py-3 px-4 text-center"><span> Rs. {'2,900'} </span></td>

              </tr>
            

            </tbody>


          </table>
          <div className='flex justify-end border-1 border-neutral-200 py-2 px-4'>
            <button type='submit' className='py-2 px-4 uppercase outline-none bg-neutral-950  hover:bg-yellow-600 cursor-pointer text-[11px] duration-500 text-white font-bold rounded'>
              update cart
            </button>
          </div>
        </div>
        <div className='max-w-full grid sm:grid-cols-1 md:grid-cols-2 mt-10 gap-5'>
          <div className='border-1 border-neutral-200'>
            <h1 className='text-xl font-serif bg-neutral-950 uppercase text-white font-semibold py-2 px-4 upercase' >Coupon</h1>

            <p className='text-[11px] text-neutral-500 font-semibold py-6 px-4'>Enter your coupon code if you have one.</p>
            <div className='py-4 px-4 flex gap-5 items-center'>
              <input type="text" className='py-2 bg-neutral-100 px-2 outline-none border-1 border-neutral-200 text-[13px] rounded ' placeholder='Coupon code' />  <button type='submit' className='py-2 px-4 uppercase outline-none bg-neutral-950  hover:bg-yellow-600 cursor-pointer text-[11px] duration-500 text-white font-bold rounded'>
                Apply coupon
              </button>
            </div>
          </div>
          <div className='border-1 border-neutral-200'>
            <h1 className='text-xl font-serif bg-neutral-950 uppercase text-white font-semibold py-2 px-4 upercase' >Cart Totals</h1>

            <div className='flex justify-between py-3 px-3 text-neutral-950 font-bold text-[16px]'><p className='text-[14px]'>Subtotal</p><span> Rs. {'2,900'} </span> </div>
            <div className='flex justify-between py-3 px-3 text-neutral-950 font-bold text-[16px]'><p className='text-[14px]'>Discount (-)</p><span> Rs. {'00'} </span> </div>
            <div className='flex justify-between py-3 px-3 text-neutral-950 font-bold text-[16px]'><p className='text-[14px]'>Total</p><span> Rs. {'2,900'} </span> </div>
            <div className='py-4 px-4 flex justify-end  items-center'>

              <button type='submit' className='py-2 px-6 uppercase outline-none hover:bg-neutral-950  bg-yellow-600 cursor-pointer text-[12px] duration-500 text-white font-bold rounded'>
                Proceed to Checkout

              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
