import React from "react";
import FormErrors from "../FormErrors/FormErrors";

import './input.css'

class Input extends React.Component {
  
  render() {
    return (
      <label>
        {this.props.label}
        <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
        {this.props.formErrors}
      </label>
       
    )
  }
}

export default Input;
