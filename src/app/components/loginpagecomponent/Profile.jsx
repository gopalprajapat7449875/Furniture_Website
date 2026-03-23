'use client'

import React, { useEffect, useState } from 'react'

export default function ProfilePage() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"))
    if (data) setUser(data)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="max-w-6xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 animate-fadeIn">

          <div className="flex flex-col md:flex-row items-center gap-6">

            {/* Profile Image */}
            <div className="relative">
              <img
                src={user?.profilePic || "https://via.placeholder.com/120"}
                alt="profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-yellow-500"
              />
            </div>

            {/* User Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">{user?.name || "User Name"}</h2>
              <p className="text-gray-500">{user?.email || "email@gmail.com"}</p>
            </div>

          </div>
        </div>

        {/* Orders Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8 animate-slideUp">

          <h3 className="text-xl font-semibold mb-6">My Orders</h3>

          {/* Dummy Orders */}
          <div className="space-y-4">

            {[1,2,3].map((item) => (
              <div
                key={item}
                className="border rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center hover:shadow-md transition"
              >
                <div>
                  <p className="font-medium">Order #{item}2345</p>
                  <p className="text-sm text-gray-500">Placed on 12 March 2026</p>
                </div>

                <div className="mt-2 md:mt-0">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Delivered
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  )
}