import React from 'react'

export default function ProductDetail() {
    return (
        <>
            <div className=" max-w-[1200px] mx-auto grid md:grid-cols-2">


                <div>
                    <img src="fdh" alt="dfh" />
                    <div>

                    </div>
                </div>
                <div className='px-5 py-3'>
                    <h5 className='text-xl font-serif text-neutral-800'>Hrithvik Stool</h5>
                    <p className='flex  items-center py-3'>
                        <span className='text-[12px] text-neutral-600  line-through px-1'>Rs. {'7,000'} </span>
                        <span className='text-[14px] text-yellow-600 font-bold  px-3'>Rs. {'7,000'} </span>
                    </p>
                    <p className='text-[11px] text-neutral-600 py-5 border-b-1 border-neutral-200'>
                        Hrithvik Stool is sturdy and great for placing in any area of the house. </p>

                    <button className='text-[13px] bg-yellow-600 font-bold text-white duration-500 hover:bg-neutral-900 cursor-pointer rounded my-3 mx-2 px-15 py-2'>
                        Add to Cart
                    </button>
                    <p className='text-[13px] px-3 text-neutral-700 font-semibold py-1'> Code: {' jod00113'} </p>
                    <p className='text-[13px] px-3 text-neutral-700 font-semibold py-1'> Dimension:: {' 72L * 32H * 30W'} </p>
                    <p className='text-[13px] px-3 text-neutral-700 font-semibold py-1'> Estimate Delivery Days: {'"30-35" Days'} </p>

                    <p className='text-[13px] px-3 text-neutral-700 font-semibold py-1'> Category: {' Coffee Tables'} </p>

                    <p className='text-[13px] px-3 text-neutral-700 font-semibold py-1'> Color: {' Faded Ochre'} </p>

                    <p className='text-[13px] px-3 text-neutral-700 font-semibold py-1'> Material: {' Marandi Wood'} </p>




                </div>

            </div>
             <div className=" max-w-[1200px] mx-auto ">

                <h4 className='text-2xl text-yellow-600 font-semibold border-b-1 border-neutral-200 py-4 px-2'> Description </h4>

                <p className='text-[12px] text-neutral-500 px-3 font-semibold py-6 '> The Evan Coffee table has stools that can be encased under the table. The Stools are cushioned to keep you comfortable, and since they can be put away under the table, they do not take up much space. This table is made of Sheesham, and the design is practical and functional. It can seamlessly blend in with any décor style owing to its simple yet elegant design.</p>
             </div>

        </>
    )
}
