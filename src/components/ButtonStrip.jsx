import React from 'react'

const ButtonStrip = () => {
  return (
    <div className='text-2xl font-bold flex flex-col justify-center items-center w-screen h-24 hover:bg-slate-100'>
      <button style={{
        "width":"100%"
      }}><a href="https://rollpark.us/company/">Company<span className='mx-4'><i className="fa-solid fa-arrow-right "></i></span></a></button>
      
    </div>
  )
}

export default ButtonStrip
