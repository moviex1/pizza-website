import React from 'react'
import Delivery from './mainComponents/Delivery'
import Hits from './mainComponents/Hits'
import './MainStyles.css'

const Main = () => {
  return (
    <div className='main'>
      <Delivery />
      <Hits />
    </div>
  )
}

export default Main