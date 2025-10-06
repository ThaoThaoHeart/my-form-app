"use client";
import { useFormData } from "../FormContext";
import { useRouter } from "next/navigation";

export default function Step1() {
  const { formData, setFormData } = useFormData()
  const router = useRouter()


  return(
    <form onSubmit={e => {
      e.preventDefault()
      console.log("Form Submitted:", formData)
      router.push("/")
    }}>
      <h1>Step 3</h1>
      <label>
        <input 
        type="date"
        value={formData.birthdate || ""}
        onChange={e =>
          setFormData({ ...formData, birthdate: e.target.value})
        }
        required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}