"use client";
import Radio from "../fields/Radio";
import Text from "../fields/Text";
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
      <Text 
        label="Name:" 
        value={formData.name}  
        onChange={e => setFormData({ ...formData, name: e.target.value})}/>
      <Radio
        label="Gender:" 
        options={["Female", "Male"]}
        selected={formData.gender}
        onChange={e => setFormData({ ...formData, gender: e.target.value})}/>
      <button type="submit">Next</button>
    </form>
  )
}