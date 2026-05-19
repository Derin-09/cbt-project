'use client'
import React, { useState } from 'react'
import { auth } from '@/app/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/utils/axios'
import { endpoints } from '@/config/endpoint'
import { useFormik } from 'formik'

type PayloadType = {
  email: string,
  password: string
}
const initialValues = {
  email: '',
  password: '',
}

const LoginAdmin = () => {
  const router = useRouter()

  const { mutateAsync: LoginAsync, error } = useMutation<unknown, Error, PayloadType>({
    mutationFn: (payload) => api.post<unknown, PayloadType>(endpoints().Auth.login_admin, payload),
    mutationKey: ['login-admin'],
    onSuccess: () => {
      toast.success('Admin logged in successfully');
      router.push(`/adminDashboard/welcome`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  })

  const { values, handleSubmit, handleReset, setFieldValue } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async () => {
      const payload = {
        ...values
      }
      LoginAsync(payload)
    }
  })


  return (
    <main className="h-screen w-screen flex items-center justify-center text-center bg-gray-100 select-none">
      <section>
        <h1 className="mb-10 text-black font-extrabold text-3xl">Login</h1>
        <p className="mb-10 text-gray-600">Welcome back to your Bells University Portal</p>

        <form
          className="flex flex-col items-center justify-center min-w-[400px]"
          onSubmit={handleSubmit}
        >
            <div className="w-full text-start">
              <label htmlFor="Email" className="text-black">
                Email
              </label>
              <input
                type="text"
                name="Email"
                placeholder="name@example.com"
                className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
                value={values.email}
                onChange={(e) => setFieldValue('email', e.target.value)}
              />
            </div>

          <div className="w-full text-start">
            <label htmlFor="Password" className="text-black">
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
              value={values.password}
              onChange={(e) => setFieldValue('password', e.target.value)}
            />
          </div>

          <div className="self-start">
            New to MyCBT?{' '}
            <span>
              <Link href={'/admin/signup'} className="text-[#2F4156] font-bold active:text-black">
                Sign Up
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#2F4156] text-white p-2 rounded-md w-full mt-5 active:bg-[#2F4180]"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  )
}

export default LoginAdmin








