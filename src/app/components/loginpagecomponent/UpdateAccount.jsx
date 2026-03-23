



import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function UpdateAccount() {
    const[open,setopen]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: ''
  })
  const [user, setUser] = useState(null)

 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      setFormData(user)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = () => {
    alert("Profile Updated ✅")
  }
  return (
   <>
   
  




  {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-8">



        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Sidebar */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h2 className="font-semibold text-lg mb-4">Dashboard</h2>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-yellow-600 cursor-pointer">Profile</li>
        
              <Link href={'my-wishlist'} > <li className="hover:text-yellow-600 cursor-pointer">Wishlist</li>
              </Link>
              <li className="hover:text-red-500 cursor-pointer pt-2">Logout</li>
            </ul>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2 bg-white p-5 md:p-8 rounded-xl shadow-md">

            <h2 className="text-xl font-semibold mb-6">Profile Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className=" outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className=" outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded" />

              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className=" outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded" />
              <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className=" outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded" />

              <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className=" outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded" />
              <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className=" outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded" />

              <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className=" outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded" />
              <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="outline-none focus:border-2 border-yellow-600 py-1 px-1 rounded md:col-span-2" />

            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center md:justify-end">
              <button
                onClick={handleUpdate}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition w-full md:w-auto"
              >
                Update Profile
              </button>
            </div>

          </div>

        </div>
      </div>
       </>
  )
}
