import { create } from "zustand"

export type SignupRole = "student" | "admin"

export type SignupAdminState = {
  name: string
  setName: (v: string) => void

  email: string
  setEmail: (v: string) => void

  position: string
  setPosition: (v: string) => void

  role: SignupRole
  setRole: (v: SignupRole) => void

  password: string
  setPassword: (v: string) => void

  passwordConfirm: string
  setPasswordConfirm: (v: string) => void

  resetSignup: () => void
}

export type SignupStudentState = {
  name: string
  setName: (v: string) => void

  matricNo: string
  setMatricNo: (v: string) => void

  department: string
  setDepartment: (v: string) => void

  role: SignupRole
  setRole: (v: SignupRole) => void

  password: string
  setPassword: (v: string) => void

  passwordConfirm: string
  setPasswordConfirm: (v: string) => void

  resetSignup: () => void
}

const initialSignupAdminState = {
  name: "",
  email: "",
  position: "",
  role: "student" as SignupRole,
  password: "",
  passwordConfirm: "",
}

const initialSignupStudentState = {
  name: "",
  matricNo: "",
  department: "",
  role: "student" as SignupRole,
  password: "",
  passwordConfirm: "",
}

export const useSignupAdminStore = create<SignupAdminState>((set) => ({
  ...initialSignupAdminState,
  setName: (v) => set({ name: v }),
  setEmail: (v) => set({ email: v }),
  setPosition: (v) => set({ position: v }),
  setRole: (v) => set({ role: v }),
  setPassword: (v) => set({ password: v }),
  setPasswordConfirm: (v) => set({ passwordConfirm: v }),
  resetSignup: () => set(initialSignupAdminState),
}))


export const useSignupStudentStore = create<SignupStudentState>((set) => ({
  ...initialSignupStudentState,
  setName: (v) => set({ name: v }),
  setMatricNo: (v) => set({ matricNo: v }),
  setDepartment: (v) => set({ department: v }),
  setRole: (v) => set({ role: v }),
  setPassword: (v) => set({ password: v }),
  setPasswordConfirm: (v) => set({ passwordConfirm: v }),
  resetSignup: () => set(initialSignupAdminState),
}))
