import React from 'react'

const Video = ({ className = '' }) => (
  <div className={`h-full w-full ${className}`}>
    <video className="h-full w-full object-cover rounded-3xl" autoPlay loop muted src="video/intro.mp4" />
  </div>
)


export default Video