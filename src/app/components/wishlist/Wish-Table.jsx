import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function WishTable() {
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

                                <th className="py-3 px-4 text-center">Stock Status</th>

                                <th className="py-3 px-4 text-center">Add To Cart</th>

                            </tr>
                        </thead>
                        <tbody className=" ">
                            <tr className=" border-b-1 border-neutral-200 ">
                                <td className="py-3 h-40 my-auto   px-4 text-xl my-auto flex justify-center justify-items-center border-l-1 border-neutral-200 "> <RiDeleteBin5Line className='hover:text-yellow-600 my-auto  duration-300 cursor-pointer ' /> </td>
                                <td className="py-3 px-4 w-65 h-40 text-center  border-x-1 border-neutral-200 "> <img className="object-center w-full h-full " src="1663996596738Group 1.jpg" alt="furniture" />
                                </td>
                                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 text-[13px] font-sans font-semibold ">Gloria Shoe Racks</td>
                                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 "><span> Rs. {'2,900'} </span></td>

                                <td className="py-3 px-4 text-center  border-r-1 border-neutral-200 flex gap-3 font-semibold font-serif text-[14px] justify-center items-center"> Out of Stock </td>

                                <td className="py-3 px-4 text-center">  <button type='submit' className='py-2 px-6 uppercase outline-none hover:bg-neutral-950  bg-yellow-600 cursor-pointer text-[12px] duration-500 text-white font-bold rounded'>
                                    Add To Cart

                                </button>  </td>

                            </tr>



                        </tbody>


                    </table>

                </div>

            </div>
        </>
    )
}
