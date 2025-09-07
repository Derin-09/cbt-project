'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Picture from '@/public/image/Frame 101.png'
import Link from 'next/link'
import Navbar from '../../../../ui/Navbar'
import { fetchData } from '@/lib/fetchData'
import { it } from 'node:test'


type Question = {
  text: string
  options: string[]
  answer: string
}

type Exam = {
  title: string
  course: string
  faculty: string
  level: string
  questions: Question[]
}


const FirstIntro = () => {
  const[result, setResult] = useState<Exam[]>([])

  const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

  useEffect(() => {
    const data = async () => {
      const examFetch = await fetchData()
      setResult(examFetch)
    }
    data()
  }, [])
 
  return (
    <main className='h-full w-screen  text-black select-none'>
      <section className='pt-5 '>
        <section className='grid grid-cols-3 gap-8 p-8'>
          <section className='ml-0 col-span-2'>
            <p className='pt-15 text-xl font-bold mb-10'>Please select your examination and start immediately!</p>
            <div className='grid grid-cols-3 gap-4 mb-2'>

              { result?.map((item, idx) => (
              <Link key={idx} href={`/dashboard/${idx}`}>
              <div className='p-5 h-40 rounded-lg border-1 border-gray-500'>
                <div className='flex gap-2 pb-5 items-center'>
                <Image src={Picture} width={35} height={35} alt="CSC 419" />
                <p className='text-lg'>{toTitleCase(item.title)}</p>
              </div>
              <p className='text-gray-500 text-md pb-3'>For faculty of {item.faculty}.</p>
              <p className='text-gray-700 font-bold text-md'>Get Started</p>
            </div>
            </Link>
          ))}
            </div>
          </section>
          <section style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)' }} className='col-span-1 ml-4 mt-15 p-5 border-gray-500 border-1 rounded-xl  '>
            <p className='text-xl font-bold'>Examination Rules</p>
            <ol className='list-decimal text-md p-5 text-gray-800 font-medium'>
            <li className='mb-3'>The new CBT is split into two parts: Part A covers numeracy and Part B covers clinical questions for nursing or midwifery.</li>
            <li className='mb-3'>The fee for sitting both parts of the new CBT will stay at £83. If you need to resit the new CBT, the following fees will apply.</li>
            <li className='mb-3'>If you choose to take the Test of Competence for return to practice, you need to first book the Test of Competence in your NMC Online account.</li>
            <li className='mb-3'>Once you get a confirmation email from Pearson Vue that your account has been created, you can log in, book and pay for your exam.</li>
            <li >Goodluck!</li>
            </ol>
          </section>
        </section>
      </section>
    </main>
  )
}

export default FirstIntro