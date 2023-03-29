import React from 'react'
import './InterestStrip.css'

const InterestStrip = () => {
  return (<>
    <div className='flex md:flex-row max-md:flex-col' style={{
        "background":"#f2f2f2"
    }}>
      <div className="interest-con flex flex-col gap-4 py-12 lg:ml-48 max-md:ml-4 md:ml-16 justify-center " >
        <div className='text-3xl font-bold '>Interested in product specifications?</div>
        <div className='interest-info text-2xl font-light text-slate-500' style={{
            
            "fontFamily":"sentinel"
        }}>Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.</div>
        <div className='specifications font-bold text-base'><a href="http://rollpark.us/case-studies/" className='flex justify-start '>Specifications<span className='ml-2'><i className="fa-solid fa-arrow-right"/></span></a></div>
      </div>

{/* images */}
      <div className='relative img-con'>
        {/* <div style={{
            "position":"relative",
            "top":"-2rem",
            "zIndex":"3"

        }}> */}
        <img src="https://rollpark.us/wp-content/themes/rollpark/img/spec-layer-1.png" alt="" style={{
            "position":"relative",
            
            "zIndex":"3"
          }} className="img-layer layer1"/>
        {/* // </div> */}
        <img src="https://rollpark.us/wp-content/themes/rollpark/img/spec-layer-2.png" alt=""  style={{
          "position":"absolute",
          "zIndex":"2"
            
        }} className="img-layer layer2"/>
        <img src="https://rollpark.us/wp-content/themes/rollpark/img/spec-layer-3.png" alt="" style={{
            "position":"absolute",
            
            "zIndex":"1"
        }} className="img-layer layer3"/>
      </div>
    </div>
        <hr/>

        {/* for making scroll over footer*/}
        <div className='bg-transparent' style={{
            "marginBottom":"30em"
        }}>
        <div className="flex items-center space-x-12 lg:pl-48 max-md:pl-4 md:pl-16 py-6" style={{
        "background":"#f2f2f2",
        "boxShadow":"0px 40px 70px -35px",
        
    }}>

            <div className='text-3xl font-bold '>Got questions?</div>
            <div className='font-bold'><i className="fa-solid fa-user text-green-600 pr-2 text-xl"/>
            Ask our manager</div>
            <div>
                <span className='text-white bg-green-600 px-2 rounded-full mr-2'>?</span><span className='font-bold'>
                     Read FAQ
                    </span>
            </div>
        </div>
        </div>
        </>
  )
}

export default InterestStrip
