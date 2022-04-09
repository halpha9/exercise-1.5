import React from 'react'

function Itemcard  (props){


  return (
    <div className='itemcard'>
            <img src ={props.img} alt ='item'/>
            <div className='itemcard__body'>
                <h4 className='itemcard__title'>{props.title}</h4>
                <p className='itemcard__price'>£{props.price}</p>
                <p className='itemcard__desc'>{props.desc}</p>
                <button className='itemcard__btn'>Add to Cart</button>
            </div>
    </div>
  );
};

export default Itemcard