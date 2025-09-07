import React from 'react'

const EnterEmail = () => {
    return (
        <main className='flex justify-center items-center h-screen text-center'>
            <section>
                <p className='text-2xl font-bold pb-3'> Please enter an email to receive your result</p>
                <p className='text-gray-400 text-lg pb-7'>Please note your results will be sent here, contact us if anything goes wrong</p>
                <div className='flex justify-center'>
                    <form className='w-[70%]'>
                        <div className='text-start'>
                            <label htmlFor='email' className='text-[#2F4156]'>Email</label><br />
                            <input name='email' className='border border-gray-500 text-[#2F4156] pl-3 py-2 rounded-lg mb-3 w-full' placeholder='name@example.com' /><br />
                        </div>
                        <button className='bg-[#2F4156] text-white px-20 py-2 rounded-lg cursor-pointer w-full'>Email result</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default EnterEmail