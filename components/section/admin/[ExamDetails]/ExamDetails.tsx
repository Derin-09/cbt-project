'use client'
import React, { useState } from 'react'
import Navbar from '../../../ui/Navbar'
import Link from 'next/link'

const ExamDetails = () => {
    const[isEdited, setIsEdited] = useState(false)

    const handleEdit = () => {
        setIsEdited(!isEdited)
    }
    return (
        <main>
            <section>
                <section className='flex gap-6 mx-10 mt-10'>
                    <div className='flex-4 text-xl font-bold'>Course Examination Details</div>
                    <div onClick={handleEdit} className='flex-1 border border-[#2F4156] text-[#2F4156] px-3 py-2 rounded-full text-center mb-3 cursor-pointer h-full'>{ isEdited ? (<span>Save</span>) : (<span>Edit</span>)} Exam Details</div>
                    <Link href={'/editexamquestions'} className='flex-1 bg-[#2F4156] text-white px-3 py-2 rounded-full text-center mb-3 cursor-pointer h-full'>
                    <div >Manage exam questions</div>
                    </Link>
                </section>
                <form className='mx-10 w-[70%] mt-5'>
                    <div className="grid grid-cols-2 gap-x-25 gap-y-10 text-gray-600">
                        <div className="flex flex-col">
                            <label htmlFor="courseName" className="mb-1 text-sm font-semibold">Course Name</label>
                            { isEdited ? (
                            <input
                                name="courseName"
                                placeholder="Introduction to Human Computer Interaction"
                                className=" border border-gray-400 px-3 py-2 rounded"
                            />
                            ) : (
                            <div 
                                className=" border border-gray-400 px-3 py-2 rounded">Introduction to Human Computer Interaction
                            </div>
                            ) }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="courseCode" className="mb-1 text-sm font-semibold">Course Code</label>
                            { isEdited ? (
                            <input
                                name="courseCode"
                                placeholder="CSC 402"
                                className=" border border-gray-400 px-3 py-2 rounded"
                            />) : (
                            <div 
                                className=" border border-gray-400 px-3 py-2 rounded">CSC 402
                            </div>
                        )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="level" className="mb-1 text-sm font-semibold">What level is this exam for?</label>
                            { isEdited ? (
                            <input
                                name="level"
                                placeholder="400 level students"
                                className=" border border-gray-400 px-3 py-2 rounded"
                            />
                            ) : (
                            <div 
                                className=" border border-gray-400 px-3 py-2 rounded">400 level students
                            </div>
                        )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="faculty" className="mb-1 text-sm font-semibold">Faculty</label>
                            { isEdited ? (
                            <input
                                name="faculty"
                                placeholder="Faculty of Applied Sciences"
                                className=" border border-gray-400 px-3 py-2 rounded"
                            />
                            ) : (
                            <div 
                                className=" border border-gray-400 px-3 py-2 rounded">Faculty of Applied Sciences
                            </div>
                        )}
                        </div>
                    </div>
                </form>
            </section>
            <section className='ml-10 mt-15'>
                <p className='text-xl font-bold my-5 '>View all students taking this exam</p>
                <table className="table-auto w-[80%] mx-10 border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-gray-500 text-sm">
                <th className="px-6 py-3">Student's Name</th>
                <th className="px-6 py-3">Department</th>
                <th className="px-6 py-3">Candidate's Level</th>
                <th className="px-6 py-3">College</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm">
              <tr className="bg-white rounded-xl shadow-sm">
                <td className="px-6 py-4">Adebayo Jacob</td>
                <td className="px-6 py-4">Computer Science</td>
                <td className="px-6 py-4">CSC/022/1437</td>
                <td className="px-6 py-4">College of Computing and Communication Studies</td>
                <td className="px-6 py-4 text-blue-900 underline">View details</td>
              </tr>
              <tr className="bg-white rounded-xl shadow-sm">
                <td className="px-6 py-4">Akorede Daniel</td>
                <td className="px-6 py-4">Computer Science</td>
                <td className="px-6 py-4">CSC/022/1455</td>
                <td className="px-6 py-4">College of Computing and Communication Studies</td>
                <td className="px-6 py-4 text-blue-900 underline">View details</td>
              </tr>
              <tr className="bg-white rounded-xl shadow-sm">
                <td className="px-6 py-4">Balogun Samuel</td>
                <td className="px-6 py-4">Computer Science</td>
                <td className="px-6 py-4">CSC/022/1477</td>
                <td className="px-6 py-4">College of Computing and Communication Studies</td>
                <td className="px-6 py-4 text-blue-900 underline">View details</td>
              </tr>
              
            </tbody>
          </table>
            </section>
        </main>
    )
}

export default ExamDetails