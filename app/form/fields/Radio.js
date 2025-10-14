"use client";

export default function Radio({ label, options, selected, onChange}){

  return ( 
  <fieldset>
    <label>{label}</label>
    {options.map(option => (
      <div>
        <label>{option}</label>
        <input key={option} type="radio" value={option} checked={selected === option} onChange={onChange}/>
      </div>
    ))}
  </fieldset>
  )
}