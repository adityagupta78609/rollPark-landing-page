import React from 'react'

const 

SchemeStrip = () => {
  return (<>
    <div className='flex flex-wrap justify-center items-center p-4 space-x-12'>
      <div className="scheme1 w-40">
        <div className="upper flex items-center">
            <span className='text-green-600'>
            <i className="fa-solid fa-wallet fa-2xl"/>
            </span><span className='text-3xl'>&nbsp; 40%</span>
        </div>
        <div className="lower">
        
less cost than using asphalt
        </div>
      </div>
      <div className="scheme2 w-40">
        <div className="upper flex items-center">
            <span className='text-green-600'>
            <i className="fa-solid fa-wrench fa-2xl"/>
            </span>
            <span className='text-3xl'>
               &nbsp; 80%
            </span>
        </div>
        <div className="lower">
        less construction time than conventional lots


        </div>
      </div>
      <div className="scheme3 w-40">
        <div className="upper flex items-center">
            <span className='text-green-600'>
            <i className="fa-solid fa-clock fa-2xl"/>
            </span>
            <span className='text-3xl'>&nbsp;7y</span>
        </div>
        <div className="lower">
        durable enough to last for up to 7 years
        </div>
      </div>
      <div className="scheme4 w-40">
        <div className="upper flex items-center">
            <span className='text-green-600'>
            <i className="fa-solid fa-droplet fa-2xl"/>
            </span><span className='text-3xl'>&nbsp;100%</span>
        </div>
        <div className="lower">
        permeability protects surrounding land


        </div>
      </div>
      <div className="scheme5 w-40">
        <a href="#">

       <div className="upper flex items-center">
        <span className='text-3xl text-right'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12+&nbsp;&nbsp;&nbsp;</span>
        <span className='text-black rounded-3xl p-3 pl-4  bg-green-600'>
        <i className="fa-solid fa-arrow-right fa-xl"/>
        </span>
       </div>
        <div className="lower">
        reasons to choose Rollpark
        </div>
        </a>
      </div>
    </div>
  <hr/>
  </>
  )
}

export default SchemeStrip
