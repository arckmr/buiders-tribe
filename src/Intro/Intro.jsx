import React from 'react'
import './intro.css'
import StarIcon from '@mui/icons-material/Star';

function Intro() {
  return (
    <div className='intro'>
   <div className='headContent'>
     <span >Get access to the best <br /> investors and VCs in web3</span></div>
     <div className='line'>
      <hr /></div>
      <div className='contentf'>Be a part of a high-trust network of buidlers.</div>
      <div className='contentS'>
         Work with over 100 functional experts who work with you in <br /> exchange for a small allocation.
      </div>
     <button className='button'>Read What Builders have to say about us!</button>
     <div className='contentG'>Are you a Buidler?</div>
     <div style={{display:"flex",paddingLeft:'35%',paddingBottom:'40px'}}>
         <div stlye={{}}>
         <StarIcon /><br />
         <span style={{fontSize:"30px"}}> 320 startup <br/>pitches</span></div>


    
         <div style={{paddingLeft:'100px'}} >  <StarIcon /><br />
         <span style={{fontSize:"30px"}}> 9 startups <br/>selected</span></div>
    </div>
       <StarIcon /><br />
         <span style={{fontSize:"30px"}}>150 investors</span>
     </div>
   
  )}

export default Intro