
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DesktopWindowsSharpIcon from '@mui/icons-material/DesktopWindowsSharp';

function Contact() {
  return (
    <div>
      <br/>
   <center><h1><b><span style={{color:'red'}}>C</span>ONTACT US</b></h1></center>
   <div className='jk'>
    <h1> <AccessTimeIcon/>Customer service </h1>
    <p>Monday to sunday</p>
    <p>8:00 Am - 6:00 pm</p>
    <br/>
    <h1><CallIcon/> phone support</h1>
    <p>888-9999-122</p>
    <br/><br/>
    <h1><MailOutlineIcon/> Email Support</h1>
    <p>analytics11.@gmail.com</p>
    <br/>
    <h1><DesktopWindowsSharpIcon/> Our website</h1>
    <p>www.anaiytics.com</p>
   </div>
   <div className='zz'>
 
   <h1>Quick Contact</h1>  
   <br/>
   <input for='text' placeholder='enter the name' id='gg'/>
   <input for='text' placeholder='enter the name' id='gg'/><br/><br/>
   <center><button className='kh'>submit</button></center>






   </div>
   
    </div>
  )
}

export default Contact