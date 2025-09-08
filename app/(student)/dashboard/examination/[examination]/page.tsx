'use client'

import React, { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { auth, db } from '@/app/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { fetchData } from '@/lib/fetchData'

type Question = {
  text: string
  options: string[]
  answer: string
}

type PageProps = {
  params: Promise<{ examination: string }>
}

export default function Page({ params }: PageProps) {
  // force unwrap the promise 🤡
  const { examination } = use(params)

  const [result, setResult] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [name, setName] = useState<string>("")
  const [matric, setMatric] = useState<string>("")
  const router = useRouter()

  const range = Array.from({ length: 30 }, (_, i) => i + 1)

  useEffect(() => {
    const loadExam = async () => {
      try {
        const examFetch = await fetchData()
        const idx = Number(examination)
        if (!examFetch || !examFetch[idx]) return
        setResult(examFetch[idx].questions)
      } catch (err) {
        console.error("Error loading exam:", err)
      }
    }
    loadExam()
  }, [examination])

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
  }, [router])

  return (
    <main className='h-screen wscreen text-black select-none'>
      <section>
        <div className='flex gap-10 justify-between h-[80px] items-center text-center absolute z-50 top-0 right-10'>
          <div>
            <div className='text-xl'>
              You have: <span className='font-bold'>00:05:34 (mins) left</span>
            </div>
          </div>
          <Link href={'/score'}>
            <div className='bg-[#2F4156] text-white rounded-full p-2 px-4 hover:cursor-pointer'>
              Submit your work
            </div>
          </Link>
        </div>

        <section className='grid grid-cols-3 gap-8 p-8'>
          {result.length > 0 && (
            <section className="ml-0 col-span-2 max-w-[900px]">
              <section className="w-full px-5 grid grid-cols-15 gap-2">
                {range.map((num, i) => (
                  <div
                    key={num}
                    className={`rounded-full p-3 font-bold text-center cursor-pointer mt-5
                      ${i === currentIndex ? "bg-[#2F4156] text-white" : "bg-gray-100"}`}
                    onClick={() => setCurrentIndex(i)}
                  >
                    {num}
                  </div>
                ))}
              </section>

              <section className="px-5 pt-15">
                <div className="font-bold text-xl">
                  {result[currentIndex].text}
                </div>
                <div className="grid grid-cols-2 justify-between pt-5 w-full">
                  {result[currentIndex].options.map((opt, idx) => (
                    <div
                      key={idx}
                      style={{ boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)" }}
                      className="mt-5 rounded-lg p-3"
                    >
                      {idx + 1}. {opt}
                    </div>
                  ))}
                </div>
                <section className="flex justify-between pt-15">
                  <div
                    className="rounded-3xl bg-[#2F4156] py-3 px-6 text-white"
                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  >
                    Previous
                  </div>
                  <div
                    className="rounded-3xl bg-[#2F4156] py-3 px-6 text-white"
                    onClick={() => setCurrentIndex(Math.min(result.length - 1, currentIndex + 1))}
                  >
                    Next
                  </div>
                </section>
              </section>
            </section>
          )}

          <section className='col-span-1 ml-4 p-5 rounded-xl'>
            <section style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)' }} className='mb-10 p-8 rounded-md max-w-[600px]' >
              <div className='flex text-md mb-6 justify-between'>
                <p className='text-gray-400'>Course Code:</p>
                <p className='font-bold'>{examination}</p>
              </div>
              <div className='flex text-md mb-6 justify-between'>
                <p className='text-gray-400'>Faculty:</p>
                <p className='font-bold'>Science</p>
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








// 'use client'

// // import House from '@/components/section/student/examination/Exam/House'
// // import React from 'react'

// // const page = ({params}: {params: {examination: string}}) => {
// //   console.log("page params 👉", params)
// //   return <House params={params}/>
// // }

// // export default page

// import House from '@/components/section/student/examination/Exam/House'
// import { use } from 'react'

//  type Props = {
//     params: Promise<{ examination: string}>
// }

// export default function Page({ params }: Props) {
//   // This shows in your TERMINAL
//   console.log("server params 👉", params)
//   const { examination } = use(params)
//   return <House params={params} />
// }
