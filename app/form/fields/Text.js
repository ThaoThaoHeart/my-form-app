"use client";

export default function Text({ label, value, onChange}){
  
  return ( 
  <fieldset>
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange}/>
  </fieldset>
  )
}