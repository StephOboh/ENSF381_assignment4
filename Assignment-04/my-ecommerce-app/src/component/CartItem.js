// import React from 'react';

// function CartItem({ item, removeFromCart }) {
//   return (
//     <div className="cart-item">
//       <img src={item.image} alt={item.name} />
//       <h3>{item.name}</h3>
//       <p>Price: {item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//       <p>Total Price: {item.quantity * item.price}</p>
//       <button onClick={() => removeFromCart(item)}>Remove</button>
//     </div>
//   );
// }

// export default CartItem;


import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const totalPrice = item.quantity * item.price;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total Price: {totalPrice}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
