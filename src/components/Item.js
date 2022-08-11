import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product,onAdd,onRemove}) => {
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="primary">₪{product.price}</Button>
      </Card.Body>
      <div>
            <button onClick={() =>onAdd(product)} > Add To Basket </button>
            <button onClick={() =>onRemove(product)} > Remove To Basket </button>
        </div>
    </Card>
  );
}

export default Item