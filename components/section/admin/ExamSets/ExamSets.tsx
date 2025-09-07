import React from 'react'
import Navbar from '../../../ui/Navbar'
import Link from 'next/link'

const ExamSets = () => {
  return (
    <main>
      <section className="">
        <div className="flex justify-between mt-10 mx-10">
          <p className="font-bold text-xl">Manage all exam candidates</p>
          <div className="bg-[#2F4156] text-white px-4 py-2 rounded"><Link href={''}></Link>Upload New Exam</div>
        </div>

        <section className="mt-6 px-10">
          <table className="table-auto w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-gray-500 text-sm">
                <th className="px-6 py-3">Examination Date</th>
                <th className="px-6 py-3">Candidate's Level</th>
                <th className="px-6 py-3">Course Code</th>
                <th className="px-6 py-3">College</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm">
              <tr className="bg-white rounded-xl shadow-sm">
                <td className="px-6 py-4">Adebayo Jacob</td>
                <td className="px-6 py-4">Computer Science</td>
                <td className="px-6 py-4">CSC/022/1437</td>
                <td className="px-6 py-4">College of Computing and Communication Studies</td>
                <td className="px-6 py-4"><Link href={'/examDetails'}>View details</Link></td>
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
      </section>
    </main>
  )
}

export default ExamSets
