import React from 'react'

const Box = ({value,onClick}) => {
  return (
    <div className="box" onClick={onClick}>
      <h2>{value}</h2>
    </div>
  )
}

export default Box
