import React from "react";
import { Counter } from "../Counter/Counter";

import './textareaField.css'

export const TextareaField = (props) => {
  return (
    <label>
      {props.label}
      <textarea autoFocus rows={props.rows} type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>        
        <div className='additional-information'>
          <div className='error-field'>{props.formErrors}</div>
          <Counter formErrors={props.formErrors} value={props.value} max={600}/>
        </div>
    </label>
  )  
}
