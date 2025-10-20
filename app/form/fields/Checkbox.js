"use client";

export default function Checkbox({ label, options, selected, onChange}){
  
  return ( 
  <fieldset>
    <label>{label}</label>
    {options.map(option => (
      <div key={option}>
        <label key={option}>{option}</label>
        <input type="checkbox" value={selected.includes(option)} onChange={() => onChange(option)}/>
      </div>
    ))}
  </fieldset>
  )
}