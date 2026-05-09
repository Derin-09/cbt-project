'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/utils/axios'
import { endpoints } from '@/config/endpoint'
import { toast } from 'sonner'
import { useFormik } from 'formik'

const initialValues: PayloadType = {
    role: 'admin',
    fullName: '',
    email: '',
    password: '',
    position: '',
}

type PayloadType = {
    role: 'admin'
    fullName: string
    email: string
    password: string
    position: string
}

const SignupAdmin = () => {
    const router = useRouter();

   
    const { mutateAsync: createAdminAsync, isPending } = useMutation<unknown, Error, PayloadType>({
        mutationFn: (payload) => api.post<unknown, PayloadType>(endpoints().Auth.add_admin, payload),
        mutationKey: ["register-admin"],
        onSuccess: () => {
            toast.success('Admin registered successfully');
            router.push(`/admin`);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    })

    const { values, handleSubmit, setFieldValue} = useFormik<PayloadType>({
        initialValues,
        enableReinitialize: true,
        onSubmit: async (formValues) => {
            await createAdminAsync(formValues);
        }
    })
    return (
        <main className='h-screen w-screen flex items-center justify-center text-center bg-gray-100 pt-10  select-none'>
            <section>
                <h1 className='mb-10 text-black font-extrabold text-3xl'>Sign Up</h1>
                <p className='mb-10 text-gray-600'>Welcome to your Bells University Student Exam Portal</p>
                <form className='flex flex-col items-center justify-center min-w-[400px]' onSubmit={(e) => handleSubmit(e)}>
                    <div className='w-full text-start'>
                        <label htmlFor='Email' className='text-black'>Email</label>
                        <input 
                        type='text' 
                        name='Email' 
                        placeholder='name@example.com' 
                        className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' 
                        value={values.email} 
                        onChange={(e) => setFieldValue('email', e.target.value)} 
                        />
                    </div>
                    <div className='w-full text-start'>
                        <label htmlFor='Position' className='text-black'>Position</label>
                        <input 
                        type='text' name='Position' 
                        placeholder='Enter your position' 
                        className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' 
                        value={values.position} 
                        onChange={(e) => setFieldValue('position', e.target.value)} 
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
                    {/* <div className='w-full text-start'>
                        <label htmlFor='Password' className='text-black'>Confirm Password</label>
                        <input type='password' name='PasswordConfirm' placeholder='Confirm your password' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>*/}
                    <div className='self-start'>Not new to MyCBT? <span><Link href={'/components/Login'} className='text-[#2F4156] font-bold'>Login</Link></span></div>
                    <button type="submit" disabled={isPending} className='bg-[#2F4156] text-white p-2 rounded-md w-full mt-5 active:bg-[#2F4180] disabled:opacity-60'>
                        {isPending ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
            </section>
        </main>
    )
}

export default SignupAdmin