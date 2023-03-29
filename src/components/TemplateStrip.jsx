import React from 'react'
import "./TemplateStrip.css"


const TemplateStrip = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col ">
      <div className="template1 mx-3 overflow-hidden relative mb-6">
        <img src="https://rollpark.us/wp-content/uploads/2018/10/homepage-gallery-1.jpg" alt="" className='w-full '/>
        <button className='case-study hover:bg-yellow-300 p-3 bg-yellow-500 rounded-3xl w-48'><a href="http://rollpark.us/case-studies/" className='flex justify-start font-bold'>See Case Studies<span className='ml-2'><i className="fa-solid fa-arrow-right"/></span></a></button>
      </div>
      <div className="template2 mx-3 overflow-hidden relative mb-6">
        <img src="https://rollpark.us/wp-content/uploads/2018/10/homepage-gallery-2.jpg" alt="" 
        className='w-full'  />
        <button className='case-study hover:bg-yellow-300 p-3 bg-yellow-500 rounded-3xl w-48'><a href="http://rollpark.us/case-studies/" className='flex justify-start font-bold'>See Case Studies<span className='ml-2'><i className="fa-solid fa-arrow-right"/></span></a></button>
      </div>
      <div className="template3 mx-3 overflow-hidden relative">
        <img src="https://rollpark.us/wp-content/uploads/2018/10/homepage-gallery-3.jpg" alt="" className='w-full'  />
        <button className='case-study hover:bg-yellow-300 p-3 bg-yellow-500 rounded-3xl w-48'><a href="http://rollpark.us/case-studies/" className='flex justify-start font-bold'>See Case Studies<span className='ml-2'><i className="fa-solid fa-arrow-right"/></span></a></button>
      </div>



      <div className="template4 mx-3 flex flex-col justify-center items-center w-full">
        <p style={{
          "maxWidth":"min(500px,30rem)",
          "minWidth":"max(20rem,350px)"
        }}>

        <span className='font-bold text-xl'>Rollpark has saved Ford Motor Company several million dollars </span><span className='text-xl text-slate-400 font-light'>by having a single site developed in a shorter time in lieu of the traditional multiple paved facilities we have utilized in the past</span>

        </p>
        <div className="small-profile flex justify-start my-3" >
          <div >
          <img className='my-1' src="https://rollpark.us/wp-content/uploads/2018/10/dean-anoe.jpg" alt="" width="35" />
          </div>
        <div className="data-profile mx-4">
          <p className='text-2xl font-semibold'>Dean Anos</p>
          <p>Senior Real Estate Manager <br/>Ford Motor Company</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default TemplateStrip
