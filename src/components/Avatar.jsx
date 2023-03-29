import React from 'react'

const Avatar = ({url,data,color}) => {
  return (<>
    {
      color=='red'?
      <div className='flex flex-col mr-10'>
      <div className='border-0 '>
        <img src={url} alt="image" width="100" className='p-1 border-red-400 rounded-full border-2'/>
      </div>
      <div className='text-sm flex justify-center items-center w-20  font-semibold'>
        {data}
      </div>
    </div>:
      
      <div className='flex flex-col mr-10'>
      <div className='border-0 '>
        <img src={url} alt="image" width="100" className='p-1 hover:border-blue-400 hover:border-2 rounded-full'/>
      </div>
      <div className='text-sm flex justify-center items-center w-20 text-slate-400 font-semibold'>
        {data}
      </div>
    </div>


    }
  </>
  )
}

export default Avatar

/*
<div className='flex flex-col'>
      <div >
        <img src="https://rollpark.us/wp-content/uploads/2018/10/logistics.jpg" alt="image" width="100" className='p-1 border-red-400 border-2 rounded-full'/>
      </div>
      <div className='text-sm flex justify-center items-center font-bold'>
        <span>Autologistics</span>
      </div>
    </div >
    */