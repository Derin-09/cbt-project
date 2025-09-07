"use client"
import React from "react"
import { auth } from "@/app/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { db } from "@/app/firebase"
import { doc, setDoc } from "firebase/firestore"
import Student from "./Student"
import Admin from "./Admin"
import { useSignupStore } from "@/state/store"

const Signup = () => {
  const {
    matricNo,
    setMatricNo,
    department,
    setDepartment,
    name,
    setName,
    position,
    setPosition,
    email,
    setEmail,
    role,
    setRole,
    password,
    setPassword,
    passwordConfirm,
  } = useSignupStore()

  const router = useRouter()

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const sanitizedMatric = matricNo.replace(/\//g, "-") || ""
    const fakeEmail = `${sanitizedMatric}@school.edu`
    const formattedEmail = role === "student" ? fakeEmail : email

    try {
      const userDetails = await createUserWithEmailAndPassword(auth, formattedEmail, password)
      const user = userDetails.user

      await setDoc(doc(db, "users", user.uid), {
        name,
        department: department || "",
        createdAt: new Date(),
        ...(role === "student" ? { matric: matricNo || "" } : { email: email || "" }),
      })

      console.log("User data saved in Firestore")
      localStorage.setItem("name", name)
      router.push(role === "admin" ? "/adminDashboard/welcome" : "/dashboard/selectexam")
    } catch (error) {
      console.error("Signup failed", error)
      alert("Invalid username or password. Please try again.")
    }
  }

  return (
    <main className="h-screen w-screen flex items-center justify-center text-center bg-gray-100 pt-10 select-none">
      <section>
        <h1 className="mb-10 text-black font-extrabold text-3xl">Sign Up</h1>
        <p className="mb-10 text-gray-600">Welcome to your Bells University Exam Portal</p>

        <form className="flex flex-col items-center justify-center min-w-[400px]" onSubmit={handleSignup}>
          <select name="Role" id="role" value={role} onChange={(e) => setRole(e.target.value as "student" | "admin")}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <div className="w-full text-start">
            <label htmlFor="Name" className="text-black">Full Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Surname first"
              className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {role === "student" ? <Student /> : <Admin />}

          <div className="w-full text-start">
            <label htmlFor="Password" className="text-black">Password</label>
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
            Not new to MyCBT?{" "}
            <span>
              <Link href={"/Login"} className="text-[#2F4156] font-bold">
                Login
              </Link>
            </span>
          </div>

          <button type="submit" className="bg-[#2F4156] text-white p-2 rounded-md w-full mt-5 active:bg-[#2F4180]">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  )
}

export default Signup











// 'use client'
// import React from 'react'
// import { useState } from 'react'
// import { auth } from '@/app/firebase'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { db } from '@/app/firebase'
// import { doc, setDoc } from 'firebase/firestore';
// import Student from './Student'
// import Admin from './Admin'

// const Signup = () => {
//     const [matricNo, setMatricNo] = useState('');
//     const [password, setPassword] = useState('');
//     const [department, setDepartment] = useState('');
//     const [name, setName] = useState('');
//     const [position, setPosition] = useState('');
//     const [email, setEmail] = useState('');
//     const [role, setRole] = useState('student');
//     const [passwordConfirm, setPasswordConfirm] = useState('');
//     const router = useRouter();

//     const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const sanitizedMatric = matricNo.replace(/\//g, '-') || ''
//         const fakeEmail = `${sanitizedMatric}@school.edu`

//         /*if(password !== passwordConfirm){
//             alert("Passwords don't match")
//             return
//         }*/
//         const formattedEmail =
//             role === 'student' ? fakeEmail : email
//         try {
//             const userDetails = await createUserWithEmailAndPassword(auth, formattedEmail, password);
//             const user = userDetails.user
//             await setDoc(doc(db, 'users', user.uid), {
//                 name: name,
//                 department: department || '',
//                 createdAt: new Date(),
//                 ...(role === 'student'
//                     ? { matric: matricNo || '' }
//                     : { email: email || '' })
//             });

//             console.log('User data saved in Firestore');
//             localStorage.setItem('name', name)
//             router.push(role === 'admin' ? '/adminDashboard/welcome' : '/dashboard/selectexam')
//         } catch (error) {
//             console.error("Signup failed", error);
//             alert('Invalid username or password. Please try again.');
//         }
//     };
//     return (
//         <main className='h-screen w-screen flex items-center justify-center text-center bg-gray-100 pt-10  select-none'>
//             <section>
//                 <h1 className='mb-10 text-black font-extrabold text-3xl'>Sign Up</h1>
//                 <p className='mb-10 text-gray-600'>Welcome to your Bells University Exam Portal</p>
//                 <form className='flex flex-col items-center justify-center min-w-[400px]' onSubmit={(e) => handleSignup(e)}>
//                     <select name="Role" id="role" value={role} onChange={e => setRole(e.target.value)}>
//                         <option value="student">Student</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                     <div className='w-full text-start'>
//                         <label htmlFor='Name' className='text-black'>Full Name</label>
//                         <input type='text' name='Name' placeholder='Surname first' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={name} onChange={(e) => setName(e.target.value)} />
//                     </div>
//                     {role === 'student' ? (
//                         <Student 
//                         // matric={matricNo}
//                         // setMatric={setMatricNo}
//                         // department={department}
//                         // setDepartment={setDepartment}
//                         />
//                     ) : (
//                         <Admin 
//                         // email={email}
//                         // setEmail={setEmail}
//                         // position={position}
//                         // setPosition={setPosition}
//                         />
//                     )}
//                     <div className='w-full text-start'>
//                         <label htmlFor='Password' className='text-black'>Password</label>
//                         <input type='password' name='Password' placeholder='Enter your password' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={password} onChange={(e) => setPassword(e.target.value)} />
//                     </div>
//                     {/* <div className='w-full text-start'>
//                         <label htmlFor='Password' className='text-black'>Confirm Password</label>
//                         <input type='password' name='PasswordConfirm' placeholder='Confirm your password' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
//                     </div>*/}
//                     <div className='self-start'>Not new to MyCBT? <span><Link href={'/Login'} className='text-[#2F4156] font-bold'>Login</Link></span></div>
//                     <button type="submit" className='bg-[#2F4156] text-white p-2 rounded-md w-full mt-5 active:bg-[#2F4180] '>Sign Up</button>
//                 </form>
//             </section>
//         </main>
//     )
// }

// export default Signup