import React from 'react'
import './OrderButtonStyle.css'

function OrderButton({children, size}) {
  return (
    <button className='order-button' style={{fontSize:size}}>{children}</button>
  )
}

export default OrderButton