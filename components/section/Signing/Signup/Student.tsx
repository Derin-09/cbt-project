// components/Student.tsx
"use client"
import { useSignupStore } from "@/state/store"
import React from "react"

export default function Student() {
  const { matricNo, setMatricNo, department, setDepartment } = useSignupStore()
  return (
    <div className="w-full">
      <div className="w-full text-start">
        <label className="text-black">Matric Number</label>
        <input
          type="text"
          placeholder="0000/0000"
          className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
          value={matricNo}
          onChange={(e) => setMatricNo(e.target.value)}
        />
      </div>
      <div className="w-full text-start">
        <label className="text-black">Department</label>
        <input
          type="text"
          placeholder="Enter your department"
          className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
    </div>
  )
}











// 'use client'
// import { useStoreStudent } from '@/state/store'
// import React, { useState } from 'react'

// // type StudentProps = {
// //   matric: string
// //   setMatric: (val: string) => void
// //   department: string
// //   setDepartment: (val: string) => void
// // }

// const Student = () => {
//     const {matric, setMatric, department, setDepartment} = useStoreStudent()
//     return (
//         <div className='w-full'>
//             <div className='w-full text-start'>
//                 <label htmlFor='Matric' className='text-black'>Matric Number</label>
//                 <input type='text' name='Matric' placeholder='0000/0000' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={matric} onChange={(e) => setMatric(e.target.value)} />
//             </div>
//             <div className='w-full text-start'>
//                 <label htmlFor='Department' className='text-black'>Department</label>
//                 <input type='text' name='Department' placeholder='Enter your department' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={department} onChange={(e) => setDepartment(e.target.value)} />
//             </div>
//         </div>
//     )
// }

// export default Student