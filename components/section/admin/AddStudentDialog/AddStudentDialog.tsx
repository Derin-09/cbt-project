'use client'

import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { toast } from 'sonner'
import * as Yup from 'yup'
import { api } from '@/utils/axios'
import { endpoints } from '@/config/endpoint'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type StudentPayloadType = {
  fullName: string
  password: string
  department: string
  matricNo: string
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  department: Yup.string().required('College/Department is required'),
  matricNo: Yup.string().required('Matric Number is required'),
})

const initialValues: StudentPayloadType = {
  fullName: '',
  password: '',
  department: '',
  matricNo: '',
}

export const AddStudentDialog = () => {
  const [open, setOpen] = useState(false)

  const { mutateAsync: addStudentAsync, isPending } = useMutation<unknown, Error, StudentPayloadType>({
    mutationFn: (payload) =>
      api.post<unknown, StudentPayloadType>(endpoints().Auth.add_student, payload, {
        withCredentials: false,
      }),
    mutationKey: ['register-student'],
  })

  const { values, handleSubmit, setFieldValue, errors, touched } = useFormik<StudentPayloadType>({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (formValues) => {
      try {
        await addStudentAsync(formValues)
        toast.success('Student registered successfully')
        setOpen(false)
        // Reset form
        setFieldValue('fullName', '')
        setFieldValue('password', '')
        setFieldValue('department', '')
        setFieldValue('matricNo', '')
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error('Failed to register student')
        }
      }
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-[#2F4156] text-white px-4 py-2 rounded hover:bg-[#1a2940] transition">
          Add new student
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription>Register a new student in the system</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F4156]"
              value={values.fullName}
              onChange={(e) => setFieldValue('fullName', e.target.value)}
            />
            {touched.fullName && errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="matricNo" className="block text-sm font-medium text-gray-700 mb-1">
              Matric Number
            </label>
            <input
              id="matricNo"
              type="text"
              placeholder="e.g., CSC/022/1437"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F4156]"
              value={values.matricNo}
              onChange={(e) => setFieldValue('matricNo', e.target.value)}
            />
            {touched.matricNo && errors.matricNo && (
              <p className="text-red-500 text-sm mt-1">{errors.matricNo}</p>
            )}
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              College/Department
            </label>
            <input
              id="department"
              type="text"
              placeholder="e.g., Computer Science"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F4156]"
              value={values.department}
              onChange={(e) => setFieldValue('department', e.target.value)}
            />
            {touched.department && errors.department && (
              <p className="text-red-500 text-sm mt-1">{errors.department}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2F4156]"
              value={values.password}
              onChange={(e) => setFieldValue('password', e.target.value)}
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 bg-[#2F4156] text-white rounded-md hover:bg-[#1a2940] disabled:opacity-50"
            >
              {isPending ? 'Registering...' : 'Register Student'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
