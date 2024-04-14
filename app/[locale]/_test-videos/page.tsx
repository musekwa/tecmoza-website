import React from 'react'
import Video from "next-video"
import BackgroundVideo from 'next-video/background-video';
import TeamPict from "@/videos/mux_team.mp4"

function TestNextVideo() {
  return (
    <BackgroundVideo 
        src={TeamPict}
        
    >
      <h1>This is a test video</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quod.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quod.
      </p>
      </BackgroundVideo>
  )
}

export default TestNextVideo