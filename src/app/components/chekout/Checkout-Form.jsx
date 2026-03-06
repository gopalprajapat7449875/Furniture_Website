import React from 'react'

export default function CheckoutForm() {
  return (
   <>
     <div className=" max-w-[1200px] mt-10 mx-auto  ">
      <div className="w-full grid md:grid-cols-2 gap-6">
        
        {/* LOGIN */}
        <div className="bg-white rounded-lg border-1 border-neutral-200  p-6">
          <h2 className="text-3xl font-serif mb-6">Login</h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-1 border-neutral-200 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Password *
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full  border-1 border-neutral-200 rounded px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-yellow-700 cursor-pointer">
                Forget your password?
              </span>

             <button className="bg-yellow-600 duration-300 cursor-pointer text-[12px] font-semibold text-white px-6 py-2 rounded-full hover:bg-neutral-800">
                LOGIN
              </button>
            </div>
          </div>
        </div>

        {/* REGISTER */}
        <div className="bg-white rounded-lg border-1 border-neutral-200 p-6">
          <h2 className="text-3xl font-serif mb-6">Register</h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Email address *
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full  border-1 border-neutral-200  rounded px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Password *
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full  border-1 border-neutral-200  rounded px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button className="bg-yellow-600 duration-300 cursor-pointer text-[12px] font-semibold text-white px-6 py-2 rounded-full hover:bg-neutral-800">
                REGISTER
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
   </>
  )
}
