import React from 'react';
import './footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';

function footer() {
  return (
      <div className='footer'>
    <div className='follow'>
       <span className='contact'>
       <TwitterIcon />
     <span className='twitter'>
       Follow @bilderstribe
     </span>
     </span>
     <img src="DiPPB5vVQAAzPUP.jpg" alt="" height="140px" width='250px'/>
     
    </div>
    <div className='input'>
        <h3>Build Daily</h3><br />
    <input placeholder='type an Email' className='email'/><button className='button2'>Submit</button></div>
    <hr />
    <br/>
    <h3 style={{paddingBottom:"40px"}}>BUILDERS TRIBE</h3>
    </div>
  )
}

export default footer