import React from "react";


function Counter(props) {
  if(props.value.length  > 600) {
    return (
      <>
      </>
      )       
  } else {
    return (
      <div>
        {props.value.length + '/' + props.max}
      </div>
    )
  }
}

export default Counter;