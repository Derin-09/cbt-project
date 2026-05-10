// components/Student.tsx
"use client"
import { endpoints } from "@/config/endpoint"
import { useSignupStudentStore } from "@/state/signupStore"
import { api } from "@/utils/axios"
import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { toast } from "sonner"

const initialValues: PayloadType = {
  fullName: '',
  matricNo: '',
  password: '',
  department: '',
}

type PayloadType = {
  fullName: string
  matricNo: string
  password: string
  department: string
}

export default function Student() {
  const router = useRouter();
  const { matricNo, setMatricNo, department, setDepartment } = useSignupStudentStore()


  const { mutateAsync: createStudentAsync, isPending } = useMutation<unknown, Error, PayloadType>({
    mutationFn: (payload) => api.post<unknown, PayloadType>(endpoints().Auth.add_admin, payload, { withCredentials: false }),
    mutationKey: ["register-student"],
    onSuccess: () => {
      toast.success('Student registered successfully');
      router.push(`/student`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  })

  const { values, handleSubmit, setFieldValue } = useFormik<PayloadType>({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (formValues) => {
      await createStudentAsync(formValues);
    }
  })
  return (
    <main className='h-screen w-screen flex items-center justify-center text-center bg-gray-100 pt-10  select-none'>
      <section>
        <h1 className='mb-10 text-black font-extrabold text-3xl'>Sign Up</h1>
        <p className='mb-10 text-gray-600'>Welcome to your Bells University Student Exam Portal</p>
        <form className='flex flex-col items-center justify-center min-w-[400px]' onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full text-start">
            <label className="text-black">Matric Number</label>
            <input
              type="text"
              placeholder="0000/0000"
              className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
              value={values.matricNo}
              onChange={(e) => setFieldValue("matricNo", e.target.value)}
            />
          </div>
          <div className="w-full text-start">
            <label className="text-black">Department</label>
            <input
              type="text"
              placeholder="Enter your department"
              className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
              value={department}
              onChange={(e) => setFieldValue("department", e.target.value)}
            />
          </div>

          <div className='w-full text-start'>
            <label htmlFor='fullName' className='text-black'>Full Name</label>
            <input
              type='text'
              name='fullName'
              placeholder='Surname first'
              className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700'
              value={values.fullName}
              onChange={(e) => setFieldValue('fullName', e.target.value)}
            />
          </div>
          <div className='w-full text-start'>
            <label htmlFor='Password' className='text-black'>Password</label>
            <input
              type='password'
              name='Password'
              placeholder='Enter your password'
              className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700'
              value={values.password}
              onChange={(e) => setFieldValue('password', e.target.value)}
            />
          </div>
          <div className='self-start'>Not new to MyCBT? <span><Link href={'/Login'} className='text-[#2F4156] font-bold'>Login</Link></span></div>
          <button type="submit" disabled={isPending} className='bg-[#2F4156] text-white p-2 rounded-md w-full mt-5 active:bg-[#2F4180] disabled:opacity-60'>
            {isPending ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </section>
    </main>
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