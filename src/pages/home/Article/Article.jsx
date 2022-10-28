import React from 'react'
import OrderButton from '../../../components/OrderButton'
import './ArticleStyles.css'

const Article = () => {
  return (
    <div className='article'>
        <h1 className='article-header'>PIZZA</h1>
        <p className='article-text'>The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern
Italian town of Gaeta in Lazio, on the border with Campania. Modern pizza was invented in
Naples, and the dish and its variants have since become popular in many countries.</p>
        <div className='button-div'>
          <OrderButton>Order Pizza</OrderButton>
        </div>
    </div>
  )
}

export default Article