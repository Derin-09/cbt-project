import React from 'react'
import Image from 'next/image'
import Picture from '@/public/image/Frame 101.png'
import Link from 'next/link'
import Navbar from '../../../ui/Navbar'

const AdminEditQuestion = () => {
    const range = Array.from({ length: 30 }, (_, i) => i + 1);
    return (
        <main className='h-full w-screen  text-black select-none'>
            <section className=' '>
                <section className='grid grid-cols-3 gap-8 p-8'>
                    <section className='ml-0 col-span-2 max-w-[900px]'>
                        <div className=''>
                            <section className='w-full px-5 grid grid-cols-15 gap-2'>
                                {range.map((num) => (
                                    <div key={num} className='rounded-full p-3 font-bold text-center bg-gray-100 active:bg-[#2F4156] active:text-white cursor-pointer grid-cols-1 mt-5'>
                                        {num}
                                    </div>))}
                            </section>
                            <section className='px-5 pt-15'>
                                <div className='font-bold text-xl'>
                                    Suppose we are sorting an array of eight integers using some quadratic sorting algorithm. After four iterations of the algorithm&apos;s main loop, the array elements are ordered as shown here: 2 4 5 7 8 1 3 6
                                </div>
                                <div className='flex justify-between pt-5 w-full'>
                                    <div>
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className='mt-5  rounded-lg p-3'>1. Insertion Sort</div>
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className='mt-5  rounded-lg p-3'>3. Selection Sort</div>
                                    </div>
                                    <div>
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className='mt-5  rounded-lg p-3'>2. Selection Sort</div>
                                        <div style={{ boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)' }} className=' mt-5 rounded-lg p-3'>4. None of the above</div>
                                    </div>
                                </div>
                                <section className='flex justify-between pt-15'>
                                    <div className='rounded-3xl bg-[#2F4156] py-3 px-6 text-white'>Previous</div>
                                    <div className='rounded-3xl bg-[#2F4156] py-3 px-6 text-white'>Next</div>
                                </section>
                            </section>
                        </div>
                    </section>
                    <section className='col-span-1 ml-4 p-5 rounded-xl'>
                        
                        <section className='mb-10 rounded-md max-w-[600px]' >
                            <div className='w-full py-4 border-2 border-[#2F4156] text-[#2F4156] rounded-md text-center mb-6'>Edit this question</div>
                            <div className='w-full py-4 border-2 border-[#2F4156] text-[#2F4156] rounded-md text-center mb-6'>Choose a new option as the answer</div>
                            <div className='w-full py-4 border-2 border-[#2F4156] text-[#2F4156] rounded-md text-center mb-6'>Change question number</div>
                            <div className='w-full py-4 border-2 border-[#2F4156] text-[#2F4156] rounded-md text-center mb-40'>Delete question</div>
                            <div className='w-full py-4 bg-[#2F4156] text-white rounded-md text-center mb-6'>Save changes</div>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default AdminEditQuestion