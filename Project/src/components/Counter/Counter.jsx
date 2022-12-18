import React from "react";


class Counter extends React.Component {
  render() {
    if(this.props.value.length  > 600) {
      return null;   
    } else {
      return (
        <div>
          {this.props.value.length + '/' + this.props.maxLength}
        </div>
      )
    }
  }  
}

export default Counter;