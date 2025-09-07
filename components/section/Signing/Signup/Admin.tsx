// components/Admin.tsx
"use client"
import { useSignupStore } from "@/state/store"
import React from "react"

export default function Admin() {
  const { email, setEmail, position, setPosition } = useSignupStore()
  return (
    <div className="w-full">
      <div className="w-full text-start">
        <label className="text-black">Email</label>
        <input
          type="text"
          placeholder="name@example.com"
          className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full text-start">
        <label className="text-black">Position</label>
        <input
          type="text"
          placeholder="Enter your position"
          className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
    </div>
  )
}










// 'use client'
// import { useStoreAdmin } from '@/state/store'
// import React, { useState } from 'react'

// // type AdminProps = {
// //   email: string
// //   setEmail: (val: string) => void
// //   position: string
// //   setPosition: (val: string) => void
// // }

// const Admin = () => {
//     const {email, setEmail, position, setPosition} = useStoreAdmin()
//     return (
//         <div className='w-full'>
//                 <div className='w-full text-start'>
//                     <label htmlFor='Email' className='text-black'>Email</label>
//                     <input type='text' name='Email' placeholder='name@example.com' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className='w-full text-start'>
//                     <label htmlFor='Position' className='text-black'>Position</label>
//                     <input type='text' name='Position' placeholder='Enter your position' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={position} onChange={(e) => setPosition(e.target.value)} />
//                 </div>
//         </div>
//     )
// }

// export default Admin