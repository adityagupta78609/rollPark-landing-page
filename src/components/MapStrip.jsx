import React from 'react'
import DataBox from './DataBox'
import Pointer from './Pointer'
import SmallDataBox from './SmallDataBox'
import mapUrl from '../assets/images/map.png'
import './Mapstrip.css'

const MapStrip = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 md:flex md:flex-col ' >
      <div  className='bg-green-400 flex flex-wrap justify-center items-center green-con' style={{
        // "width":"50vw",
        // "overflow":"scroll"
      }}>
        <div className='my-20' style={{
            "maxWidth":"500px",
            "minWidth":"200px"
        }}>

        <div>
            <span className='font-bold text-2xl'>
            US Patent    
            </span>
            <span className='font-normal text-2xl'>
            &nbsp; No. 6,361,245B1
            </span>
        </div>
        <div className='text-2xl flex flex-wrap text-slate-600 my-2 ' style={{
             "fontFamily":"sentinel",
             
        }}>
        
        The product is resistant to tears, soft chemicals, puncture damage and ultraviolet light exposure. It’s also unaffected by hydrocarbons, mildew, rot and the freeze and thaw cycle.
        
        </div>
        <div className='flex flex-shrink my-6' >
            <DataBox url="https://rollpark.us/wp-content/themes/rollpark/img/patent-logo-1.png" text="Industrial Fabrics International Award"/>
            <DataBox url="https://rollpark.us/wp-content/themes/rollpark/img/patent-logo-2.png" text="Top 3 of 100 suppliers by CSX"/>
            <DataBox url="https://rollpark.us/wp-content/themes/rollpark/img/patent-logo-3.png" text="3 Safety Awards from Advocare"/>
        </div>
        </div>
      </div>

      <div className='map-con' style={{
        // "width":"50vw",
        "height":"35em",
        "backgroundImage":`url(${mapUrl})`,
        "objectFit":"scaleDown",
        "backgroundRepeat":"none",
        "position":"relative",
        // "backgroundSize":"contain"
        // "backgroundPosition":"center"
      }}>


        {/*
        ******** code only applicable when the backgroundImage of div just above this comment is set to 
        'https://rollpark.us/wp-content/themes/rollpark/img/map.png'
        
        <div className='flex '>
            <SmallDataBox classes="fa-solid fa-users" int="150" detail="Employees" />
            <SmallDataBox classes="fa-solid fa-building" int="5" detail="offices" />
            <SmallDataBox classes="fa-solid fa-calendar-days" int="60" detail="years of experience" />
        
        
        </div>
        
        
        <div style={{
            "position":"absolute",
            "top":"13rem",
            "left":"12rem"
        }}>
        <Pointer location="Calgary" classes="fa-sharp fa-solid fa-location-dot text-red-600" />
        </div>

        <div style={{
            "position":"absolute",
            "top":"15.5rem",
            "left":"19.5rem"
        }}><Pointer location="Warren" classes="fa-sharp fa-solid fa-location-dot text-red-600"/></div>

        <div style={{
            "position":"absolute",
            "top":"17rem",
            "left":"16rem"
        }}><Pointer location="Dallas" classes="fa-sharp fa-solid fa-location-dot text-red-600"/></div>

        <div style={{
            "position":"absolute",
            "top":"11.5rem",
            "left":"39rem"
        }}><Pointer location="London" classes="fa-sharp fa-solid fa-location-dot text-red-600"/></div>

        <div style={{
            "position":"absolute",
            "top":"17.8rem",
            "left":"19.5rem"
        }}><Pointer location="Charlotte" classes="fa-solid fa-star text-red-600"/></div>
         */}
        </div>
      </div>
    
  )
}

export default MapStrip
