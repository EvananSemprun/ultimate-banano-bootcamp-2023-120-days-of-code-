import React from 'react'

const gent = (props) => {
  return (
    <div>
        <img src={props.img} />
        <h1>{props.name} </h1>
        <p>{props.role} </p>
    </div>
  )
}

export default gent