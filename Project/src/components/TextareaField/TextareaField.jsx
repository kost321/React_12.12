import React from "react";

import './textareaField.css'

class TextareaField extends React.Component {

  render() {
    return (
      <label>
        {this.props.label}
        <textarea autoFocus maxLength={385} rows={this.props.rows} type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
      </label>
    )
  }  
}

export default TextareaField;
