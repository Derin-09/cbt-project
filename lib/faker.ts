import { faker } from '@faker-js/faker'

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

const faculties = ['Engineering', 'Science', 'Arts', 'Management', 'Law']
const levels = ['100', '200', '300', '400']

function generateQuestion(): Question {
  const options = Array.from({ length: 4 }, () => faker.word.words(2))
  const correct = faker.number.int({ min: 0, max: 3 })
  return {
    text: faker.lorem.sentence(),
    options,
    answer: options[correct],
  }
}

function generateExam(): Exam {
  const questions = Array.from({ length: 30 }, generateQuestion)
  return {
    title: faker.word.words(3),
    course: `${faker.word.adjective()} ${faker.word.noun()}`,
    level: faker.helpers.arrayElement(levels),
    faculty: faker.helpers.arrayElement(faculties),
    questions,
  }
}

console.log('>>> Script actually started')
const exams = Array.from({ length: 10 }, generateExam)
console.log(JSON.stringify(exams, null, 2))
