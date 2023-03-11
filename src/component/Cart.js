


import React from 'react';
import './CandyShop.css';
function Cart(props) {
  return (
    <div className={`cart ${props.open ? 'open' : ''}`}>
      <h2>Cart</h2>
      {props.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {props.items.map(item => (
            <div key={item.name} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <p>Total: ${props.items.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          <button onClick={props.closeCart}>Close Cart</button>
          <button onClick={props.placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;
