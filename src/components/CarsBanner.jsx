import React from 'react'

const CarsBanner = () => {
  return (
    <div>
      <div className="contain1 text-3xl font-bold pt-10 lg:pl-64 max-sm:ml-2 sm:ml-6 ">Over 1 million cars parked</div>
      <div className="contain2 text-slate-400 p-3 pb-8 lg:pl-64 text-3xl italic sm:ml-4" style={{
        "fontFamily":`'Alkatra', cursive`
      }}>on Rollpark for companies like</div>

      <div className="contain3 flex flex-wrap items-center justify-center ">
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-1.jpg" alt="" width="55" className='pb-12 mr-10' />
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-2.jpg" alt="" width="47" className='pb-12 mr-10'/>
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-3.jpg" alt="" width="122" className='pb-12 mr-10'/>
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-4.jpg" alt="" width="53" className='pb-12 mr-10'/>
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-5.jpg" alt="" width="106" className='pb-12 mr-10'/>
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-6.jpg" alt="" width="26" className='pb-12 mr-10'/>
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-7.jpg" alt="" width="100" className='pb-12 mr-10'/>
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-8.jpg" alt="" width="53" className='pb-12 mr-10'/>
      <img src="https://rollpark.us/wp-content/uploads/2018/10/company-logo-9.jpg" alt="" width="126" className='pb-12 mr-10'/>

      </div>
    </div>
  )
}

export default CarsBanner
