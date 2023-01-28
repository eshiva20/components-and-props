import React from 'react'

const ChildA = (props) => {
  return (
    <div>
      <h1>This is Child component A and Name got from parent is <span style={{color:"green"}}>{props.name}</span>  and age is <span style={{color:"green"}}>{props.age}</span> </h1>
    </div>
  )
}

export default ChildA
