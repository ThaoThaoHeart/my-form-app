"use client";

export default function TextArea({ label, value, onChange}){
  
  return ( 
  <fieldset>
    <label>{label}</label>
    <textarea value={value} onChange={onChange}/>
  </fieldset>
  )
}