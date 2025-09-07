

'use client'
import React from 'react'
import Image from 'next/image'
import Picture from '@/public/image/Frame 101.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { auth, db } from '@/app/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { fetchData } from '@/lib/fetchData'

type Question = {
  text: string
  options: string[]
  answer: string
}

// type Exam = {
//   title: string
//   course: string
//   faculty: string
//   level: string
//   questions: Question[]
// }

const House = ({params}: {params: {examination: string}}) => {
  const[result, setResult] = useState<Question[]>([])
    const range = Array.from({ length: 30 }, (_, i) => i + 1);
    const [name, setName] = useState<string>("")
 const [matric, setMatric] = useState<string>("")

 useEffect(() => {
    const data = async () => {
      const examFetch = await fetchData()
      const idx = Number(params.examination)
      if (!examFetch || !examFetch[idx]) return
      setResult(examFetch[idx].questions)
    }
    data()
  }, [params.examination])


     const router = useRouter();
     useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, async (user) => {
     if (user) {
       try {
         const userRef = doc(db, 'users', user.uid)
         const userSnap = await getDoc(userRef)
 
         if (userSnap.exists()) {
           const userData = userSnap.data()
           setName(userData.name || 'Guest')
           setMatric(userData.matric || 'Guest')
         } else {
           setName('Guest')
         }
       } catch (err) {
         console.error('Error fetching user data:', err)
         setName('Guest')
       }
     } else {
       router.push('/components/Login')
     }
   })
 
   return () => unsubscribe()
 }, [])

    return (
        <main className='h-scree w-screen   text-black select-none'>
            <section className=' '>
                <div className='flex gap-10 justify-between h-[80px] items-center flex-3 text-center absolute z-50 top-0 right-10'>
                        <div>
                            <div className='text-xl'>You have: <span className='font-bold'>00:05:34 (mins) left</span></div>
                        </div>
                        <Link href={'/score'}>
                        <div className='bg-[#2F4156] text-white rounded-full p-2 px-4 hover:cursor-pointer'> Submit your work</div>
                        </Link>
                    </div>
                {/*<hr className='bg-gray-300 text-gray-500 w-screen'/>*/}
                <section className='grid grid-cols-3 gap-8 p-8'>
                { result.map((item, index) => (  
                    <section key={index} className='ml-0 col-span-2 max-w-[900px]'>
                        <div className=''>
                            <section className='w-full px-5 grid grid-cols-15 gap-2'>
                                {range.map((num) => (
                                    <div key={num} className='rounded-full p-3 font-bold text-center bg-gray-100 active:bg-[#2F4156] active:text-white cursor-pointer grid-cols-1 mt-5'>
                                        {index}
                                    </div>))}
                            </section>
                            <section className='px-5 pt-15'>
                                <div className='font-bold text-xl'>
                                    {item.text}
                                </div>
                                <div className='grid grid-cols-2 justify-between pt-5 w-full'>
                                    { item.options.map((items, idx) => (
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className='mt-5  rounded-lg p-3 '>{idx}. {items}</div>
                                        ))}
                                    {/* <div>
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className='mt-5  rounded-lg p-3'>3. Selection Sort</div>
                                    </div>
                                    <div>
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className='mt-5  rounded-lg p-3'>2. Selection Sort</div>
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className=' mt-5 rounded-lg p-3'>4. None of the above</div>
                                    </div> */}
                                </div>
                                <section className='flex justify-between pt-15'>
                                    <div className='rounded-3xl bg-[#2F4156] py-3 px-6 text-white'>Previous</div>
                                    <div className='rounded-3xl bg-[#2F4156] py-3 px-6 text-white'>Next</div>
                                </section>
                            </section>
                        </div>
                    </section>
                ))}
                    <section className='col-span-1 ml-4 p-5 rounded-xl'>
                        <section style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)' }} className='mb-10 p-8 rounded-md max-w-[600px]' >
                            <div className='flex text-md mb-6 justify-between'>
                                <p className='text-gray-400'>Course Code:</p>
                                <p className='font-bold'>{params.examination}</p>
                            </div>
                            <div className='flex text-md mb-6 justify-between'>
                                <p className='text-gray-400'>Course Code:</p>
                                <p className='font-bold'>{params.examination}</p>
                            </div>
                            <div className='flex text-md justify-between'>
                                <p className='text-gray-400'>Duration:</p>
                                <p className='font-bold'>40 mins</p>
                            </div>
                        </section>
                        <section style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className='mb-10 p-8 rounded-md max-w-[600px]' >
                            <p className='text-2xl pb-3'>Student details</p>
                            <p className='text-gray-400 pb-7'>Please always confirm your details are correct</p>
                            <p className='font-bold text-3xl pb-3'>{matric}</p>
                            <p className=' text-gray-400 pb-7'>{name}</p>
                            <div className='w-full py-4 border-2 border-[#2F4156] text-[#2F4156] rounded-md text-center'>Report a problem</div>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default House