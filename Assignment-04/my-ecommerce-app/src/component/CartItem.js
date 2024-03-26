import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item" >
      <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} />
      <div>
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
