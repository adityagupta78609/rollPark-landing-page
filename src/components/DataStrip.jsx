import React from 'react'

const DataStrip = () => {
  return (
    <>
    <div className='flex flex-wrap p-5 justify-center space-x-6'>
      <div className="dataStrip1 text-black font-bold text-4xl">
        Designed for You.
      </div>
      <div className="dataStrip2">

        <ul className='text-slate-600 text-2xl p-2 pl-6'>
            <li>- Roll it out and instantly park</li>
            <li>- Re-use it on multiple sites</li>
            <li>- Event Parking, Overflow, Vehicle Storage</li>
            <li>- Daily, temporary use <span className='text-green-600 italic' style={{
                "fontFamily":`'Alkatra', cursive`
            }}>1-3 years</span></li>
            <li>- Daily, long term use <span className='text-green-600 italic' style={{
                "fontFamily":`'Alkatra', cursive`
            }}>4-10 years</span></li>
        </ul>
      </div>
      <div className="dataStrip3 relative">
    <img src="https://rollpark.us/wp-content/themes/rollpark/img/designed-for-you-image.png" alt="image:designed for you" width="300" className='mt-6' />
    <img src="https://rollpark.us/wp-content/themes/rollpark/img/designed-for-you-shadow.png" alt="shadow" width="300" 
    style={{
      "opacity":"0.1",
      "position":"absolute",
      "top":"5em",
      "zIndex":"-1"

    }}/>
      </div>
    </div>
    <hr/>
    </>
  )
}

export default DataStrip
