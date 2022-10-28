import React from 'react'
import { NavLink } from 'react-router-dom'

function Connection() {
  return (
      <ul className='footer-connection-links'>
        <li style={{textDecoration:'none'}}>
          <NavLink>Contacts</NavLink>
        </li>
        <li>
          <NavLink>Support</NavLink>
        </li>
        <li>
          <NavLink>Location</NavLink>
        </li>
      </ul>
  )
}

export default Connection