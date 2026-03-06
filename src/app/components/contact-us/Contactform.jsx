import React from 'react'

export default function Contactform() {
    return (
        <>
            <div className=" max-w-[1200px] mx-auto  py-5 grid sm:grid-cols-1 md:grid-cols-2">

                <div className='pt-4 px-2'>
                    <h5 className='text-xl py-3 border-b border-neutral-200 font-semibold font-serif '>
                        Contact Us
                    </h5>
                    <p className='text-[13px]  border-b border-neutral-200  text-neutral-700 py-3'>Address: Claritas est etiam processus dynamicus</p>
                    <p className='text-[13px]  border-b border-neutral-200  text-neutral-700 py-3'  >Phone: <a className='hover:text-yellow-600 cursor-pointer' href="tel:+919876543210">+919876543210</a> </p>
                    <p className='text-[13px]   text-neutral-700 py-3'>Email: furnitureinfo@gmail.com</p>

                </div>

                  <div className='pt-4 px-2'>

                    <h5 className='text-xl py-3  font-semibold font-serif '>
                       Tell us your question

                    </h5>
                     <form className="my-2 text-[12px] ">

        {/* Name */}
        <div className='py-4'>
          <label className="block font-semibold mb-2">
            Your Name (required)
          </label>
          <input
            type="text"
            placeholder="Name *"
            className="w-full border border-gray-300  px-4 py-3 rounded outline-none focus:border-black"
          />
        </div>

        {/* Email */}
        <div className='py-4'>
          <label className="block font-semibold mb-2">
            Your Email (required)
          </label>
          <input
            type="email"
            placeholder="Email *"
            className="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:border-black"
          />
        </div>

        {/* Mobile */}
         <div className='py-4'>
          <label className="block font-semibold mb-2">
            Your Mobile Number (required)
          </label>
          <input
            type="tel"
            placeholder="Mobile Number *"
            className="w-full border border-gray-300  px-4 py-3 rounded outline-none focus:border-black"
          />
        </div>

        {/* Subject */}
        <div className='py-4'>
          <label className="block font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject *"
            className="w-full border border-gray-300  px-4 py-3 rounded outline-none focus:border-black"
          />
        </div>

        {/* Message */}
         <div className='py-4'>
          <label className="block font-semibold mb-2">
            Your Message
          </label>
          <textarea
            rows="6"
            placeholder="Message *"
            className="w-full border border-gray-300  px-4 py-3 rounded outline-none focus:border-black"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-neutral-800 text-[14px] rounded hover:bg-yellow-600 cursor-pointer text-white px-6 py-2 hover:bg-gray-800 transition"
        >
          Send
        </button>

      </form>
                  </div>
            </div>
        </>
    )
}
