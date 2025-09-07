'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Picture from '@/public/image/Frame 101.png'
import Link from 'next/link'
import Navbar from '../../../ui/Navbar'
import { redirect, useRouter } from 'next/navigation'
import { auth, db } from '@/app/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { it } from 'node:test'

type DetailsType = {
    title: string
    content: string
    link: string
}

const details: DetailsType[] = [
    {
        title: 'Examinations',
        content: 'Upload and manage examinations to be taken and written by students.',
        link: '/examSets'
    },
    {
        title: 'Candidates',
        content: 'Manage all candidates and handle all candidate related issues.',
        link: '/candidates'
    },
    {
        title: 'Results',
        content: 'Manage and print all candidate results and manage all result related issues.',
        link: ''
    },
    {
        title: 'Your Profile',
        content: 'Manage your profile and all security / access related issues.',
        link: ''
    },
]

const SecondIntro = () => {
    const [user, setUser] = useState<string>("")

    const router = useRouter();
    useEffect( () => {
        (async () => {
            const session = await auth

            if(!session) {
                redirect("/Login")
            }
        })()
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userRef = doc(db, 'users', user.uid)
                    const userSnap = await getDoc(userRef)

                    if (userSnap.exists()) {
                        const userData = userSnap.data()
                        setUser(userData.name || 'Guest')
                    } else {
                        setUser('Guest')
                    }
                } catch (err) {
                    console.error('Error fetching user data:', err)
                    setUser('Guest')
                }
            } else {
                router.push('/components/Login')
            }
        })

        return () => unsubscribe()
    }, [])
    return (
        <main className='h-full w-screen  text-black select-none'>
            <section className=''>
                <section className='p-12'>
                    <section className='ml-0 col-span-2'>
                        <p className='pt-15 text-2xl font-bold mb-10'>Welcome, {user}!</p>
                        <div className='grid grid-cols-4 gap-4 mb-2'>
                            { details.map((items, idx) => (
                            <Link key={idx} href={`${items.link}`}>
                                <div className='p-5 rounded-lg border-1 border-gray-500  '>
                                    <div className='flex gap-2 pb-5 items-center'>
                                        <Image src={Picture} width={35} height={35} alt="CSC 419" />
                                        <p className='text-lg font-bold text-gray-700'>{items.title}</p>
                                    </div>
                                    <p className='text-gray-500 text-md pb-3'>{items.content}</p>
                                    <p className='text-gray-700 font-bold text-md'>Get Started</p>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default SecondIntro