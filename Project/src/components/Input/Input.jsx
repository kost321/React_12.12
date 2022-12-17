import React from "react";

import './input.css'

function Input(props) {
  return (
    <label>
      {props.label}
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
      {props.formErrors}
    </label>  
  )
}

export default Input;
