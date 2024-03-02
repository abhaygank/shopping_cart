// src/components/ProductList.js
import React from 'react';
import iphone from './iphone.jpeg'
import Oneplus from './Oneplus.jpeg'
import samsung from './samsung.jpeg'
import reno from './reno.jpeg'
import Oneplus7T from './Oneplus7T.jpeg'
import pocof4 from './pocof4.jpeg'

const products = [
  {
     id: 1, name: 'Iphone 13 ', price: 60000,imge:iphone },
  { id: 2, name: 'Oneplus', price: 56000,imge:Oneplus },
  {
    id:3, name:'Samsung f40',price:16000,imge:samsung},
    {id:4,name:'Oppo reno 8',price:24000,imge:reno},
    {id:5,name:'Oneplus7T',price:37000,imge:Oneplus7T},
    {id:6,name:'pocof4',price:28000,imge:pocof4},
  
  // Add more products as needed
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.imge} alt='img' className='imgStyle' width="250px" height="300px"></img>
            {product.name} - ${product.price}
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
