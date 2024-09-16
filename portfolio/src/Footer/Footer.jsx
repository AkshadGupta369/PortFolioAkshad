import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{display:"flex",margin:"2rem",justifyContent:"space-between"}}>
      <p style={{color:"white",position:"relative",zIndex:"2",fontSize:"1.75rem"}}><span style={{fontFamily:'fantasy'}}>Developed By Akshad Gupta</span></p>
      <div style={{display:"flex"}}>
    <p style={{color:"white",position:"relative",zIndex:"2",fontSize:"1.75rem",marginRight:"2rem"}} > <a href='https://github.com/AkshadGupta369' style={{color:"white"}}><FaGithub /></a></p>
     <p style={{color:"white",position:"relative",zIndex:"2",fontSize:"1.75rem",marginRight:"2rem"}} ><a href='https://www.linkedin.com/in/akshad-gupta-b3667527b/' style={{color:"white"}}><FaLinkedin /></a></p>
     <p style={{color:"white",position:"relative",zIndex:"2",fontSize:"1.75rem",marginRight:"2rem"}} > <a href='https://x.com/akshad369' style={{color:"white"}}><FaTwitter/></a></p>

      </div>
    </div>
  )
}

export default Footer
