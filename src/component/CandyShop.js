import React, { useState } from 'react';
import CandyList from './CandyList';
import Cart from './Cart';
import './CandyShop.css';

function CandyShop() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(candy) {
    setCartItems([...cartItems, candy]);
  }

  function removeFromCart(candy) {
    setCartItems(cartItems.filter(item => item !== candy));
  }

  return (
    <div className="candy-shop">
      <header>
        <h1>Candy Shop</h1>
        <button className="cart-icon" onClick={() => setCartOpen(!cartOpen)}>
          Cart ({cartItems.length})
        </button>
      </header>
      <CandyList addToCart={addToCart} />
      <Cart open={cartOpen} items={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CandyShop;
