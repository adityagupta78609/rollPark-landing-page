import React from 'react'
import './Greenfooter.css'

const GreenFooter = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-green-600 w-screen opacity-90 pt-12 pb-6 space-y-6'>
      <div className='text-5xl font-bold'>REQUEST A PROPOSAL</div>
      <div className='text-xl text-slate-600 ' style={{
        "width":"30em",
        "fontFamily":"sentinel"
      }}>Leave your details for our manager to contact you.
Let our estimating and design team assess your project.
Receive a proposal and free consultation.</div>
      <div> 
        <button className='btn-req text-white px-6 py-5 rounded-full font-bold' >Request a Quote</button>
      </div>
      <div className='text-xs text-green-800' style={{
        "width":"44vw"
      }}
      >Save on your next parking project with Rollpark, the most advanced and eco-friendly semi-permanent parking solution to date.</div>
    </div>
  )
}

export default GreenFooter
