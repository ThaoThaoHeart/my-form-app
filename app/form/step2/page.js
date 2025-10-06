"use client";
import { useFormData } from "../FormContext";
import { useRouter } from "next/navigation";

export default function Step1() {
  const { formData, setFormData } = useFormData()
  const router = useRouter()

  const toggleHobby = hobby => {
    const currentHobbies = formData.hobbies || []
    const hobbies = currentHobbies.includes(hobby) ?
    currentHobbies.filter(h => h !== hobby) :
    [...currentHobbies, hobby]
    setFormData({ ...formData, hobbies})
  }

  return(
    <form onSubmit={e => {
      e.preventDefault()
      router.push("/form/step3")
    }}>
      <h1>Step 2</h1>
      <fieldset>
        <legend>Hobbies:</legend>
        {["Reading", "Sports", "Music"].map(hobby => (
          <label key={hobby}>
            <input 
            type="checkbox"
            checked={formData.hobbies?.includes(hobby) || false}
            onChange={() => toggleHobby(hobby)}
            />
            {hobby}
          </label>
        ))}
      </fieldset>

      <button type="submit">Next</button>
    </form>
  )
}