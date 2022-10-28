import React from 'react'
import Article from './Article/Article'
import Main from './Main/Main'
import bg from '../../assets/image_2022-09-18_01-46-06.png';

function Home() {
  return (
    <div>
        <img className="bg-image" src={bg} alt=""/>
        <Article />
        <Main />
    </div>
  )
}

export default Home