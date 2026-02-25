import React from 'react'
// import Navbar from '../../../ui/Navbar'

const Newquestion = () => {
  return (
    <main>
      <section>
        <p className="text-xl font-bold my-10 ml-15">Add a new question / Edit</p>
        <form className="min-w-[400px] ml-15 mr-30 space-y-6">
          <div className="flex flex-col">
            <label htmlFor="questionTitle" className="mb-1 text-sm font-semibold">Enter question title here</label>
            <input
              name="questionTitle"
              placeholder="Type in something here"
              className=" border border-gray-400 px-3 py-2 rounded"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-25 gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="option1" className="mb-1 text-sm font-semibold">Option 1</label>
              <input
                name="option1"
                placeholder="Type in something here"
                className=" border border-gray-400 px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="option2" className="mb-1 text-sm font-semibold">Option 2</label>
              <input
                name="option2"
                placeholder="Type in something here"
                className=" border border-gray-400 px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="option3" className="mb-1 text-sm font-semibold">Option 3</label>
              <input
                name="option3"
                placeholder="Type in something here"
                className=" border border-gray-400 px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="option4" className="mb-1 text-sm font-semibold">Option 4</label>
              <input
                name="option4"
                placeholder="Type in something here"
                className=" border border-gray-400 px-3 py-2 rounded"
              />
            </div>
          </div>
        <div className='w-full flex justify-center'>
          <button className="bg-[#2F4156] text-white px-20 py-2 rounded">
            Save changes
          </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Newquestion
