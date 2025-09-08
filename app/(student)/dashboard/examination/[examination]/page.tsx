'use client'

// import House from '@/components/section/student/examination/Exam/House'
// import React from 'react'

// const page = ({params}: {params: {examination: string}}) => {
//   console.log("page params 👉", params)
//   return <House params={params}/>
// }

// export default page

import House from '@/components/section/student/examination/Exam/House'

 type Props = {
    params: Promise<{ examination: string}>
}

export default function Page({ params }: Props) {
  // This shows in your TERMINAL
  console.log("server params 👉", params)
  return <House params={params} />
}
