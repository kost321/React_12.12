import React from "react";

import './input.css'

class Input extends React.Component {
  
  render() {
    return (
      <label>
        {this.props.label}
        <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
        <div className='error-field'>{this.props.formErrors}</div> 
      </label>  
    )
  }
}

export default Input;
