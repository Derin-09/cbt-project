import Navbar from '@/components/ui/Navbar'
import React, { ReactNode } from 'react'

const layout = ({ children}: { children: ReactNode}) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default layout