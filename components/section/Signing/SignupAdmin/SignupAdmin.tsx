'use client'
import React from 'react'
import { useState } from 'react'
import { auth } from '@/app/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { db } from '@/app/firebase'
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [position, setPosition] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.namedItem('Email') as HTMLInputElement;
        const password = form.elements.namedItem('Password') as HTMLInputElement;
        const position = form.elements.namedItem('Position') as HTMLInputElement;
        const name = form.elements.namedItem('Name') as HTMLInputElement;
        const passwordConfirm = form.elements.namedItem('PasswordConfirm') as HTMLInputElement;

        /*if(password !== passwordConfirm){
            alert("Passwords don't match")
            return
        }*/
              try {
            const userDetails = await createUserWithEmailAndPassword(auth, email.value, password.value);
            const user = userDetails.user
            await setDoc(doc(db, 'users', user.uid), {
                name: name.value,
                position: position.value,
                email: email.value,
                createdAt: new Date(),
                role: "admin"
            });

            console.log('User data saved in Firestore');
            router.push('/components/SecondIntro');
        } catch (error) {
            console.error("Signup failed", error);
            alert('Invalid username or password. Please try again.');
            email.value = '';
            password.value = '';
            position.value = '';
            name.value = '';
        }
    };
    return (
        <main className='h-screen w-screen flex items-center justify-center text-center bg-gray-100 pt-10  select-none'>
            <section>
                <h1 className='mb-10 text-black font-extrabold text-3xl'>Sign Up</h1>
                <p className='mb-10 text-gray-600'>Welcome to your Bells University Student Exam Portal</p>
                <form className='flex flex-col items-center justify-center min-w-[400px]' onSubmit={(e) => handleSignup(e)}>
                    <div className='w-full text-start'>
                        <label htmlFor='Email' className='text-black'>Email</label>
                        <input type='text' name='Email' placeholder='name@example.com' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-full text-start'>
                        <label htmlFor='Position' className='text-black'>Position</label>
                        <input type='text' name='Position' placeholder='Enter your position' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    <div className='w-full text-start'>
                        <label htmlFor='Name' className='text-black'>Full Name</label>
                        <input type='text' name='Name' placeholder='Surname first' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='w-full text-start'>
                        <label htmlFor='Password' className='text-black'>Password</label>
                        <input type='password' name='Password' placeholder='Enter your password' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  {/* <div className='w-full text-start'>
                        <label htmlFor='Password' className='text-black'>Confirm Password</label>
                        <input type='password' name='PasswordConfirm' placeholder='Confirm your password' className='border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>*/}
                    <div className='self-start'>Not new to MyCBT? <span><Link href={'/components/Login'} className='text-[#2F4156] font-bold'>Login</Link></span></div>
                    <button type="submit" className='bg-[#2F4156] text-white p-2 rounded-md w-full mt-5 active:bg-[#2F4180] '>Sign Up</button>
                </form>
            </section>
        </main>
    )
}

export default Signup