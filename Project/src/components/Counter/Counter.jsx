import React from "react";


class Counter extends React.Component {
  render() {
    if(this.props.value.length  > 600) {
      return (
        <div>
          {'Превышен лимит символов в поле'}
        </div>
      )       
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