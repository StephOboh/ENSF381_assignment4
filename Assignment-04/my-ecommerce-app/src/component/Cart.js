import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  // Function to calculate the total price of all items in the cart
  const calculateTotal = () => {
    // If cart is empty, return 0
    if (cart.length === 0) {
      return '$0.00';
    }

    // Reduce function sums up the total price by multiplying each item's price with its quantity
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return `$${total.toFixed(2)}`;
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}
      {/* Display the total price */}
      <h3>Total(in cart): {calculateTotal()}</h3>
    </div>
  );
};

export default Cart;




