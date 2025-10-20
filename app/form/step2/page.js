"use client";
import Checkbox from "../fields/Checkbox";
import TextArea from "../fields/TextArea";
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
        <Checkbox 
          label="Hobbies"
          options={["Reading", "Sports", "Music"]}
          selected={formData.hobbies}
          onChange={toggleHobby}/>
        <TextArea 
          label="Describe yourself"
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value})}/>
      </fieldset>

      <button type="submit">Next</button>
    </form>
  )
}