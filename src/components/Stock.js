import React from 'react'
import Itemcard from './Itemcard'
import Items from './Items'
import './Stock.scss'

function Stock() {


  return (
    <>
    <div className ="stock">
        {Items.data.map((item,index) =>{
            return (

                <Itemcard className="stock__card"
                img = {item.img} 
                item ={item} 
                title={item.title} 
                price={item.price} 
                key={index} 
                desc ={item.desc}
                />
            )
        })}   
    </div>
    </>
  )
}

export default Stock