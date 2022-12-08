import React from "react";

class FieldForm extends React.Component {
constructor(props) {
  super(props);

}
  render() {
    if(this.props.rows === 7) {
      return (
        <textarea rows={this.props.rows} type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
      )
    } else {
      return (
        <input type="text" placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
      );
    }

  }
}

export default FieldForm;





  