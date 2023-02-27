import React, { useRef, useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from "../../constants"
import "./intro.css"

const Intro = () => {

  return (
    <div className='app__video'>
      <video
        src={meal}
        autoPlay = {true} 
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>
      <div className="app__video-overlay flex__center">
      </div>
    </div>
  )
}

export default Intro
