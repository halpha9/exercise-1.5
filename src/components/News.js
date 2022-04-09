import React from 'react'
import { useInView } from 'react-intersection-observer';
import mountain from '../img/mountain.jpeg'
import './News.scss'

function News() {

  const { ref:myRef, inView:visible } = useInView({
    threshold: .2,
  }); 

  return (
    <div className='news' ref ={myRef}>
        <div className='news__left'>
            <img className = 'news__img' src={mountain} alt ='mountain' />
        </div>

        <div className={`news__right ${!visible ? 'section--hidden' : 'section--visible'}  `}>
        <h2>The imaginative application of art and science.</h2>
        <h3 className='products__subheading1'>We architect, design and deliver iconic experiences, services and products that improve peoples lives</h3>
        <button className='standard__btn'>READ LATEST</button>
        </div>     
    </div>
  )
}

export default News