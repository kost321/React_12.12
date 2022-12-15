import React from "react";

import './fieldForm.css'

class Input extends React.Component {
  
  render() {
    return (
      <label>
        {this.props.label}
        <input type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
      </label>
    );
  }
}

export default Input;
