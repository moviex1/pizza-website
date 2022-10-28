import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuStyles.css'
import PizzaItems from './PizzaItems/PizzaItems';

function Menu() {
  const sorts = ['Popular', 'Low to High', 'Hight to Low', 'Category']
  const [dropdownTitle, setDropdownTitle] = useState('Sort by')
  //state for changing dropdown title
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
        <DropdownButton
        variant='secondary'
        menuVariant='dark'
        title={dropdownTitle}
        >
         {sorts.map(item => <Dropdown.Item>{item}</Dropdown.Item>)} 


        </DropdownButton> 
        </div>
        <PizzaItems />
      </div>
    </div>
  )
}

export default Menu