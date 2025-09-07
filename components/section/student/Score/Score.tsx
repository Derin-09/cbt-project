import Link from 'next/link'
import React from 'react'

const Score = () => {
  return (
    <main className='flex justify-center items-center h-screen text-center'>
      <section>
        <p className='text-3xl font-bold pb-10'> Well-done!</p>
        <p className='text-gray-400 text-xl '>Your exam has been submitted successfully! <br />You scored</p>
        <div className='text-5xl text-[#2F4156] font-bold pb-10'>37/50</div>
        <Link href={''}>
          <button className='bg-[#2F4156] text-white px-20 py-2 rounded mb-3 cursor-pointer'>Email my results to me</button>
        </Link><br />
        <Link href={'/enterEmail'}>
          <button className='border border-[#2F4156] text-[#2F4156] px-20 py-2 rounded cursor-pointer'>Send to another email</button>
        </Link>
      </section>
    </main>
  )
}

export default Score