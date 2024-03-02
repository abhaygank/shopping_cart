// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <CartItem item={item} onRemoveFromCart={onRemoveFromCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
