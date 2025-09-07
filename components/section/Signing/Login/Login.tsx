'use client'
import React, { useState } from 'react'
import { auth } from '@/app/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import {toast } from 'sonner'
import Link from 'next/link'

const Login = () => {
  const [role, setRole] = useState<'student' | 'admin'>('student')
  const [matricNo, setMatricNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // forge that fake email if student
    const sanitized = matricNo.replace(/\//g, '-')
    const fakeEmail = `${sanitized}@school.edu`
    const loginEmail = role === 'student' ? fakeEmail : email

    try {
      await signInWithEmailAndPassword(auth, loginEmail, password)
      router.push(role === 'admin' ? '/adminDashboard/welcome' : '/dashboard/selectexam')
    } catch (error) {
      console.error('Login failed', error)
      toast('Wrong username or password. Try again.')
      setPassword('')
    }
  }

  return (
    <main className="h-screen w-screen flex items-center justify-center text-center bg-gray-100 select-none">
      <section>
        <h1 className="mb-10 text-black font-extrabold text-3xl">Login</h1>
        <p className="mb-10 text-gray-600">Welcome back to your Bells University Portal</p>

        <form
          className="flex flex-col items-center justify-center min-w-[400px]"
          onSubmit={handleLogin}
        >
          <select
            name="Role"
            id="role"
            className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700 hover:bg-[#2F4156] hover:text-white"
            value={role}
            onChange={(e) => setRole(e.target.value as 'student' | 'admin')}
          >
            <option value="student" className=' '>Student</option>
            <option value="admin">Admin</option>
          </select>

          {role === 'student' ? (
            <div className="w-full text-start">
              <label htmlFor="Matric" className="text-black">
                Matric Number
              </label>
              <input
                type="text"
                name="Matric"
                placeholder="0000/0000"
                className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
                value={matricNo}
                onChange={(e) => setMatricNo(e.target.value)}
              />
            </div>
          ) : (
            <div className="w-full text-start">
              <label htmlFor="Email" className="text-black">
                Email
              </label>
              <input
                type="text"
                name="Email"
                placeholder="name@example.com"
                className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}

          <div className="w-full text-start">
            <label htmlFor="Password" className="text-black">
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="self-start">
            New to MyCBT?{' '}
            <span>
              <Link href={'/Signup'} className="text-[#2F4156] font-bold active:text-black">
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

export default Login



















// 'use client'
// import React from 'react'
// import { useState } from 'react'
// import { auth } from '@/app/firebase'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const form = e.currentTarget;
//         const matric = form.elements.namedItem('Matric') as HTMLInputElement;
//         const password = form.elements.namedItem('Password') as HTMLInputElement;
//         const sanitizedMatric = matric.value.replace(/\//g, '-')
//         const fakeEmail = `${sanitizedMatric}@school.edu`

//         try {
//             await signInWithEmailAndPassword(auth, fakeEmail, password.value);
//             router.push('/dashboard/selectexam'); 
//         } catch (error) {
//             console.error("Login failed", error);
//             alert('Wrong username or password. Please try again.');
//             matric.value = '';
//             password.value = '';
//         }
//     };
//     return (
//         <main className='h-screen w-screen flex items-center justify-center text-center bg-gray-100 select-none'>
//             <section>
//                 <h1 className='mb-10 text-black font-extrabold text-3xl'>Login</h1>
//                 <p className='mb-10 text-gray-600'>Welcome back to your Bells University Student Exam Portal</p>
//                 <form className='flex flex-col items-center justify-center min-w-[400px]' onSubmit={(e) => handleLogin(e)}>
//                     <div className='w-full text-start'>
//                         <label htmlFor='Matric' className='text-black'>Matric Number</label>
//                         <input type='text' name='Matric' placeholder='0000/0000' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </div>
//                     <div className='w-full text-start'>
//                         <label htmlFor='Password' className='text-black'>Password</label>
//                         <input type='password' name='Password' placeholder='Enter your password' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     <div className='self-start'>New to MyCBT? <span><Link href={'/Signup'} className='text-[#2F4156] font-bold active:text-black'>Sign Up</Link></span></div>
//                     <button type="submit" className='bg-[#2F4156] text-white p-2 rounded-md w-full mt-5 active:bg-[#2F4180]'>Login</button>
//                 </form>
//             </section>
//         </main>
//     )
// }

// export default Login