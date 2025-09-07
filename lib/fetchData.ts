'use client'
import { useState } from "react"

type Question = {
  text: string
  options: string[]
  answer: string
}

type Exam = {
  title: string
  course: string
  faculty: string
  level: string
  questions: Question[]
}



export const fetchData = async () => {
    try {
        const res = await fetch('/seed-output.json')
        const data = await res.json()
        if (!res.ok) throw new Error('Failed to fetch data')
        return data
    } catch (err) {
        console.log(err)
    }
}