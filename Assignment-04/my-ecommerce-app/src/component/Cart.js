import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total Cost: {calculateTotalCost(cartItems)}</p>
    </div>
  );
}

function calculateTotalCost(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

export default Cart;
