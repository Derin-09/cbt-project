import React from 'react'
// import Navbar from '../../../ui/Navbar'

const Studentslist = () => {
  return (
    <main>
      <section className="">
        <div className="flex justify-between mt-10 mx-10">
          <p className="font-bold text-xl">Manage all exam candidates</p>
          <div className="bg-[#2F4156] text-white px-4 py-2 rounded">Add new student</div>
        </div>

        <section className="mt-6 px-10">
          <table className="table-auto w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-gray-500 text-sm">
                <th className="px-6 py-3">Student&apos;s Name</th>
                <th className="px-6 py-3">Department</th>
                <th className="px-6 py-3">Candidate&apos;s Level</th>
                <th className="px-6 py-3">College</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm">
              <tr className="bg-white rounded-xl shadow-sm">
                <td className="px-6 py-4">Adebayo Jacob</td>
                <td className="px-6 py-4">Computer Science</td>
                <td className="px-6 py-4">CSC/022/1437</td>
                <td className="px-6 py-4">College of Computing and Communication Studies</td>
                <td className="px-6 py-4">View details</td>
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

export default Studentslist
