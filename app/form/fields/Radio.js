"use client";

export default function Radio({ label, options, selected, onChange}){

  return ( 
  <fieldset>
    <label>{label}</label>
    {options.map(option => (
      <div key={option}>
        <label>{option}</label>
        <input type="radio" value={option} checked={selected === option} onChange={onChange}/>
      </div>
    ))}
  </fieldset>
  )
}