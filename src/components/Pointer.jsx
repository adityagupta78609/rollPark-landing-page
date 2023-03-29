import React from 'react'

const Pointer = ({location,classes}) => {
  return (
    <div>
    <i className={classes}/><span className='text-white'> {location}</span> </div>
  )
}

export default Pointer
