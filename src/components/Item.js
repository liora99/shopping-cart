import React from 'react'


const Item = ({product,onAdd,onRemove}) => {
   return (
        <div className = 'black'>
        <img src={product.image} width='100' alt = {product.name} />
        
        <h3> {product.name} </h3> 
        <div> ₪ {product.price} </div>
        <div>
            <button onClick={() =>onAdd(product)} > Add To Basket </button>
            <button onClick={() =>onRemove(product)} > Remove To Basket </button>
        </div>
        </div>
    )
}

export default Item
