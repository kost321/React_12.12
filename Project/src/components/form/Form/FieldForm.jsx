import React from "react";

import './fieldForm.css'

class FieldForm extends React.Component {
constructor(props) {
  super(props);
  
}

  render() {
    if(this.props.rows === 7) {
      return (
        <textarea autoFocus maxLength={385} rows={this.props.rows} type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
      )
    } else {
      return (
        <input type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
      );
    }
  }
  
}
export default FieldForm;





  