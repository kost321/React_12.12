import React from "react";

import './input.css'

export const Input = (props) => {
  return (
    <label>
      {props.label}
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
      <div className='error-field'>{props.formErrors}</div>
    </label>  
  )
}
