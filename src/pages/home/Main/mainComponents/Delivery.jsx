import React from 'react';
import DeliveryPizzaImg from '../../../../assets/pizza-delivery.png'

const Delivery = () => {
  return (
    <div className='delivery'>
      <div className='delivery-div-img'>
       <img src={DeliveryPizzaImg} alt="" className='delivery-img'/>
      </div>
      <div className='delivery-info'>
        <h1>Lunch Specials</h1>
        <p className='delivery-offer'>
        2 slices of cheese pizza with a drink $4.60
        <span>+ taxes (toppings are extra)</span> 
        <span>Please see menu</span>
        </p>
        <p className='delivery-offer'>
        1 slice of cheese pizza with a small 
        House salad & a drink $6.50 
        <span>+ taxes (toppings are extra)</span> 
        </p> 
        <p>
          Available monday-saturday 11am-3pm
          dine in on carry out only
        </p>
        <p>LIMITED TIME OFFER</p>
        <button className='delivery-specials-button'>all specials</button>
      </div>
    </div>
  )
}

export default Delivery;