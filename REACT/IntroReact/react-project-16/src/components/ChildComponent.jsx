import React from 'react'

const ChildComponent = React.memo(
  (props) => {
  console.log("child component rendered")
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
}

)
export default ChildComponent
// React.memo se kya hoga ki agar hm parent buttton ko krrhe hain to 
//to child component render nhi hoga pr agar props change krdiye to 
// to firse render hoga
// limitation
// jb tk hm koi value change krrhe the tb tk toh bch raha tha render hone se 
// pr jaise hi function pass kra tb it wont be able to save u .

