// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div>
      {item.name} - ${item.price}
      <button onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
