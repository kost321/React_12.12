import React from "react";

export const Counter = (props) => {

  return(
    <div>
      {props.value.length  > 600 ? null : 
        <>
          {props.value.length + '/' + props.max}
        </>
      }
    </div>
  )
}
