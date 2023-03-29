import React from 'react'
import GreenFooter from './GreenFooter'
import RollparkFooter from './RollparkFooter'

const Footer = () => {
  return (
    <div className='flex flex-col' style={{
        "position":"fixed",
        "bottom":"0",
        "left":"0",
        "zIndex":"-5"
    }}>
      <GreenFooter/>
      <RollparkFooter/>
    </div>
  )
}

export default Footer
