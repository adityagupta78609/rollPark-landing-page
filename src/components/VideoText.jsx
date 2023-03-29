import React from 'react'

const VideoText = () => {
  return (
    <div style={{
      "color":"white",
      "zIndex":"5",
      "position":"absolute",
      "top":"50vh",
      "left":"10vh"
        }}>
      this is a text
      <div className="partition1">
        {/* play button */}
      </div>
      <div className="partition2"></div>
      <div className="partition3"></div>
    </div>
  )
}

export default VideoText
