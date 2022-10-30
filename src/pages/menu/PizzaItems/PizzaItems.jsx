import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderButton from '../../../components/OrderButton';
import { changeSize } from '../../../redux/menuSlice';
import './PizzaItems.css';

function PizzaItems() {
    const pizzaList = useSelector((state) => state.menuPage.pizzaList);
  return (
    <div className='pizza-items'>
       {pizzaList.map((item) => <PizzaItem {...item} key={item.id}/>)} 
    </div>
  )
}
function PizzaItem({name, title,price, currentSize, img, id}){
    const dispatch = useDispatch();

    return (
    <div className='pizza-item'>
        <img src={img} alt=""/>
        <h5 className='pizza-item_name'>{name}</h5>
        <p className='pizza-item_title'>{title}</p>
        <select onChange={(e)=> dispatch(changeSize({value:e.target.value, id}))} value={currentSize} name="" id="">
            <option value="medium">Medium</option>
            <option value="big">Big</option>
        </select>
        <select name="" id="">
            <option value="">Classic</option>
        </select>
        <OrderButton size={'1.25rem'}>Add to cart</OrderButton>
    </div>)
}



export default PizzaItems