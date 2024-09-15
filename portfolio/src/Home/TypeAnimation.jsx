import React from 'react'
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
   <Typewriter
    options={{
        strings:["SoftWare Developer","Full Stack Developer","DSA Enthusiast"],
        autoStart:true,
        loop:true,
        deleteSpeed:60,
        
    }}
   />
  )
}

export default TypeAnimation
