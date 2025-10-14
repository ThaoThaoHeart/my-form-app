"use client";
import { createContext, useState, useContext } from "react";

const FormContext = createContext()

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    hobbies: [],
    birthdate: "",
    description: "",
  })

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormData() {
  return useContext(FormContext)
}
