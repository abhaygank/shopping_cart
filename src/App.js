// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import './App.css'; // Create this file for styling if not already present

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = product => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const handleRemoveFromCart = item => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <ProductList onAddToCart={handleAddToCart} />
        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default App;
