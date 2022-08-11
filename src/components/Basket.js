import React from 'react'
const Basket = ({itemsBasket,onAdd,onRemove}) => {
const itemsTotalPrice = itemsBasket.reduce((a,c)=> a+c.price* c.qty,0);

    return (
        <aside>
            <h2>Basket items </h2>
    <div> {itemsBasket.length ===0 && <div> basket is empty </div> } </div>
    
    {itemsBasket.map((item)=> (
        <div key= {item.id}>
        <div> {item.title} </div>
        <div> 
            <button onClick={()=>onAdd(item)} > + </button>
            <button onClick={()=>onRemove(item)} > - </button>
       </div>
        <div> {item.qty} * ₪{item.price.toFixed(2)} </div>
        </div>
    ))}
    {
        itemsBasket.length !== 0 && (
            <>
            <div> Items Price </div>
            <div> ₪{itemsTotalPrice.toFixed(2)} </div>
            </>
        )
    }
        </aside>
    )
}

export default Basket
