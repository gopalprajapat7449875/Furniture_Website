import React from 'react'

export default function Formsection() {
    return (
        <>
            <div className=' bg-neutral-100 py-8 border-b-neutral-200 flex flex-col items-center justify-items-center '>
                <h4 className='text-[22px] font-semibold font-serif py-4'>
                    Our Newsletter
                </h4>
                <p className='text-[14px] text-neutral-500 pb-5'>
                    Get E-mail updates about our latest shop and special offers.
                </p>
                <div className='flex items-center py-7'>
                    <input className='text-[12px] outline-none py-2.5 px-5 w-120 rounded-l border-l-2 border-y-2  border-neutral-400' type='Email' placeholder='Enter Email...' required />
                    <button type='submit' className='py-2.5 px-13 outline-none bg-yellow-600 hover:bg-yellow-900 cursor-pointer text-[14px] text-white font-semibold rounded-r'>
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    )
}
