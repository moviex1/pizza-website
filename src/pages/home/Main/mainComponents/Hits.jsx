import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderButton from '../../../../components/OrderButton';
import margherita from '../../../../assets/Margherita.jpg'
import pepperoni from '../../../../assets/Pepperoni.jpg'
import fourSeason from '../../../../assets/Four season.jpg'



const Hits = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    
      <Carousel 
      activeIndex={index} onSelect={handleSelect}
      className='hits'
      >
        <Carousel.Item 
        >
          <img  className="d-block w-100 hits-carousel-bg" src={margherita} alt="" />
          <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>Margherita</h1>
            <p>Only for 10$ you can order this tasty pizza</p>
            <OrderButton>Order now</OrderButton>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hits-carousel-bg " src={fourSeason} alt="" />
          <Carousel.Caption className=' h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>Four seasons</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas.</p>
            <OrderButton>Order now</OrderButton>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hits-carousel-bg " src={pepperoni} alt="" />
          <Carousel.Caption className=' h-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>Pepperoni</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error?</p>
            <OrderButton>Order now</OrderButton>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default Hits