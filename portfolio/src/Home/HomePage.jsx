import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import TypeAnimation from './TypeAnimation';
import AkshadImage from "../assets/AkshadImage.jpg";
import BottomPage from './BottomPage';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home parent' style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"100vh"}}>
        <div className='home-content'>
        <h1 style={{fontSize:"3rem",position:"static",textAlign:"center"}} >Hi</h1>
      <h1 style={{fontSize:"2.5rem"}}>I'M <span style={{color:"#32CD30",position:"static",fontSize:"3rem"}}> Akshad Gupta</span> </h1>
     <div style={{color:"white",fontSize:"2.5rem",position:"static"}} className='text animation'>
     <TypeAnimation/>
     </div>
       </div>

      <div className='Image'>
        <img
        style={{height:"450px",width:'300px',borderRadius:'30px',position:"static"}}
          src={AkshadImage}
         
       > </img>
      </div>
      </div>

   <BottomPage/>

   
    </div>
  
  )
}

export default HomePage;
