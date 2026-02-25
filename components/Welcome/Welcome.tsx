import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'

const Welcome = () => {
  return (
   <main className='h-screen w-screen flex bg-gray-300 py-[50px] px-5'>
    <section> 
        <p className='mb-4 text-2xl font-bold text-black'>Welcome to BrizlloConnectz!</p>
        <div className='text-lg text-gray-500 mb-15'>Already have an account?<span><Link href={''} className='text-blue-500'>Login</Link></span></div>

        <form className='h-auto'>
            <input aria-label='Email Address' className='border border-black rounded-lg p-2 mb-8 w-full ' />
            <input aria-label='Password' className='border border-black rounded-lg p-2 mb-8 w-full' />
            <button className='bg-[#1852CE] text-white rounded-lg py-3 px-4 bottom-0 w-full'>Continue</button>
        </form>
    </section>
   </main>
  )
}

export default Welcome