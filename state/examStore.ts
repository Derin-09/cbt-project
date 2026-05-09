import { create } from "zustand"

export type ExamState = {
  score: number
  setScore: (v: number) => void
  resetScore: () => void
}

export const useExam = create<ExamState>((set) => ({
  score: 0,
  setScore: (v) => set({ score: v }),
  resetScore: () => set({ score: 0 }),
}))
