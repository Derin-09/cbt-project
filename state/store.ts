// import { create } from 'zustand'

// type DetailsAdmin = {
//   email: string
//   setEmail: (val: string) => void
//   position: string
//   setPosition: (val: string) => void
// }

// type DetailsStudent = {
//   matric: string
//   setMatric: (val: string) => void
//   department: string
//   setDepartment: (val: string) => void
// }

// export const useStoreAdmin = create<DetailsAdmin>((set) => ({
//   email: '',
//   setEmail: (val) => set({email: val}),
//   position: '',
//   setPosition: (val) => set({ position: val})

// }))

// export const useStoreStudent = create<DetailsStudent>((set) => ({
//   matric: '',
//   setMatric: (val) => set({matric: val}),
//   department: '',
//   setDepartment: (val) => set({ department: val})

// }))





// store/useSignupStore.ts
import { create } from "zustand"

type SignupState = {
  name: string
  setName: (v: string) => void

  matricNo: string
  setMatricNo: (v: string) => void

  department: string
  setDepartment: (v: string) => void

  email: string
  setEmail: (v: string) => void

  position: string
  setPosition: (v: string) => void

  role: "student" | "admin"
  setRole: (v: "student" | "admin") => void

  password: string
  setPassword: (v: string) => void

  passwordConfirm: string
  setPasswordConfirm: (v: string) => void
}

export const useSignupStore = create<SignupState>((set) => ({
  name: "",
  setName: (v) => set({ name: v }),

  matricNo: "",
  setMatricNo: (v) => set({ matricNo: v }),

  department: "",
  setDepartment: (v) => set({ department: v }),

  email: "",
  setEmail: (v) => set({ email: v }),

  position: "",
  setPosition: (v) => set({ position: v }),

  role: "student",
  setRole: (v) => set({ role: v }),

  password: "",
  setPassword: (v) => set({ password: v }),

  passwordConfirm: "",
  setPasswordConfirm: (v) => set({ passwordConfirm: v }),
}))
