import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './MenuStyles.css';
import PizzaItems from './PizzaItems/PizzaItems';

function Menu() {
  return (
    <div className='menu'>
      <ul className='menu-categ'>
        <li>Pizza</li>
        <li>Chicken</li>
        <li>Fries</li>
        <li>Drinks</li>
      </ul>
      <div className="menu-pizza">
        <div className='px-5 d-flex justify-content-between w-100'>
        <h1 className="menu-pizza-header">Pizza</h1>
        <select name="sort by" id="">
          <option value="" disabled>Sort by</option>
          <option value="">From Low to High</option>
          <option value="">From High to Low</option>
        </select> 
        </div>
        <PizzaItems />
      </div>
    </div>
  )
}

export default Menu