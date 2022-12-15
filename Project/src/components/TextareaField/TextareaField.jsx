import React from "react";
import Counter from "../Counter/Counter";

import './textareaField.css'

class TextareaField extends React.Component {

  render() {
    return (
      <label>
        {this.props.label}
        <textarea autoFocus rows={this.props.rows} type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>        
          <div className='additional-information'>
            {this.props.formErrors}
            <Counter formErrors={this.props.formErrors} value={this.props.value} maxLength={600}/>
          </div>
      </label>
    )
  }  
}

export default TextareaField;
