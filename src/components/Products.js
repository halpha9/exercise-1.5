import React from 'react'
import { Link } from 'react-router-dom'
import './Products.scss'
import { useInView } from 'react-intersection-observer';


function Products() {
  const { ref:myRef, inView:visible } = useInView({
    threshold: .2,
  }); 

  return (
    <div className='products' ref ={myRef}>
      <div className={`product__block  ${!visible ? 'section--hidden' : 'section--visible'}  `}>
        <h2>Innovation and experience design agency.</h2>
        <h3>Apps is an innovation and experience design agency.</h3>
        <h3>We exist to create a better future with you.</h3>
        <Link to ='/products'>
        <button className='products__btn'>PRODUCTS</button>
        </Link>
      </div>
    </div>
  )
}

export default Products