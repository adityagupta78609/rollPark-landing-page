import React from 'react'

const DataBox = ({url,text}) => {
  return (
    <div style={{
        "width":"200px"
    }}>
      <div>
        <img src={url} alt="" width="53" />
      </div>
      <div className='text-slate-500 text-lg'>
        {text}
      </div>
    </div>
  )
}

export default DataBox
