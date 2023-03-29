import React from 'react'

const SmallDataBox = ({classes,int,detail}) => {
  return (
    <div className='my-12 ml-12 text-2xl'>
      <div className='text-green-600 mb-1'>
        <i className={classes}  />
        <span className='text-white mx-3 text-3xl'>{int}</span>
      </div>
      <div className='text-slate-400 text-lg'>
        {detail}
      </div>
    </div>
  )
}

export default SmallDataBox
