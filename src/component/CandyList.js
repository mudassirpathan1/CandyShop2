

import React from 'react';

const candies = [
  {
    name: 'Gummy Bears',
    description: 'Chewy, fruity, and delicious',
    price: 2.99,
  },
  {
    name: 'Sour Patch Kids',
    description: 'Tart, tangy, and addictive',
    price: 3.99,
  },
  {
    name: 'Chocolate Bars',
    description: 'Rich, creamy, and indulgent',
    price: 4.99,
  },
];

function CandyList(props) {
  return (
    <div className="candy-list">
      {candies.map(candy => (
        <div key={candy.name} className="candy-item">
          <h2>{candy.name}</h2>
          <p>{candy.description}</p>
          <p>Price: ${candy.price.toFixed(2)}</p>
          <button onClick={() => props.addToCart(candy)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default CandyList;

