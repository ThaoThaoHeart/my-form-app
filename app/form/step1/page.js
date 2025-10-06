"use client";
import { useFormData } from "../FormContext";
import { useRouter } from "next/navigation";

export default function Step1() {
  const { formData, setFormData } = useFormData()
  const router = useRouter()

  return(
    <form onSubmit={e => {
      e.preventDefault()
      router.push("/form/step2")
    }}>
      <h1>Step 1</h1>
      <label>Name:</label>
      <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value})} required/>

      <fieldset>
        <label>Gender:</label>
        <label>
          <input 
          type="radio" 
          name="gender" 
          value="male" 
          checked={formData.gender === "male"} 
          onChange={e =>
            setFormData({ ...formData, gender: e.target.value})
            }/>
          Male
        </label>
        <label>
          <input 
          type="radio" 
          name="gender" 
          value="female" 
          checked={formData.gender === "female"} 
          onChange={e =>
            setFormData({ ...formData, gender: e.target.value})
            }/>
          Female
        </label>
      </fieldset>
      
      <button type="submit">Next</button>
    </form>
  )
}