import React from 'react'
import'./header.css'

function header() {
  return (
    <div className='header'>
      <span className='logo'>BUILDERS TRIBE</span>
       <div >
          <ul className='rightHead'>
              <li className='list'>Home</li>
              <li className='list'>Our Startup </li>
              <li className='list'>Builders </li>
              <li className='list'>Investors </li>
              <li className='list'>Experts </li>
              <li className='list'>People </li>
              <li className='list'>Values</li>
              <li className='list'>BeliefDAO </li>
              <li className='list'>Jobs</li>
          </ul>
       </div>
    </div>
  )
}

export default header