// import React from 'react';
// import CartItem from './CartItem';

// function Cart({ cartItems }) {
//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cartItems.map((item) => (
//         <CartItem key={item.id} item={item} />
//       ))}
//       <p>Total Cost: {calculateTotalCost(cartItems)}</p>
//     </div>
//   );
// }

// function calculateTotalCost(items) {
//   return items.reduce((total, item) => total + item.quantity * item.price, 0);
// }

// export default Cart;


import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;
