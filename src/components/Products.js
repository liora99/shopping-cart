import React from 'react'
import Item from './Item';

const Products = ({products,onAdd,onRemove}) => {
    return (
        <div>
            <div className ="product"> Products </div>
            <div> {products.map((product)=> (
                <Item  key = {product.id} product= {product} onAdd={onAdd} onRemove={onRemove}> </Item>
            ))} </div>
        </div>
    )
}

export default Products
