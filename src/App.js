// import React,{ useState} from "react";

// import CandyList from "./component/CandyList";
// import Cart from "./component/Cart";
// import Candy from "./component/Candy";
// import Navbar from "./component/Navbar";

// function App() {
// const [cartItems, setCartItems] = useState([]);

// const handleAddTocart = (candy) =>{
//   setCartItems ([...cartItems,candy]);
// }
//  return(
//   <div>
//     <Navbar/>
//     <form>
//     <Candy/>
    
//     <CandyList onAddToCart={handleAddTocart}/>
//     <Cart items={cartItems}/>
//     </form>
//   </div>
//  );
// }

// export default App;


import React from 'react';
import CandyShop from './component/CandyShop';
function App() {
  return (
    <div>
     < CandyShop />
</div>
);
}

export default App;



