import House from '@/components/section/student/examination/Exam/House'
import React from 'react'

const page = ({params}: {params: {examination: string}}) => {
  return (
    <div>
        <House params={params}/>
    </div>
  )
}

export default page