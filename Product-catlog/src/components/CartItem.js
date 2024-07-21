
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>${item.price} x {item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
