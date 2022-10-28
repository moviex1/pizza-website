import React from 'react'
import OrderButton from '../../../components/OrderButton'
import './PizzaItems.css'
import bolonizie from '../../../assets/Bolonieze.png'

function PizzaItems() {
  return (
    <div className='pizza-items'>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
    </div>
  )
}
function PizzaItem(){
    return (
    <div className='pizza-item'>
        <img src={bolonizie} alt="" />
        <h5>Name</h5>
        <p>title</p>
        <select onChange={(e)=> console.log(e.target.value)} name="" id="">
            <option  value="medium">Medium</option>
            <option value="big">Big</option>
        </select>
        <select name="" id="">
            <option value="">Classic</option>
        </select>
        <OrderButton size={'1.25rem'}>Add to cart</OrderButton>
    </div>)
}



export default PizzaItems