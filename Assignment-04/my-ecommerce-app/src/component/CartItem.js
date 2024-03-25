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


// import React from 'react';

// const CartItem = ({ item, removeFromCart }) => {
//   const totalPrice = item.quantity * item.price;

//   return (
//     <div className="cart-item">
//       <img src={item.image} alt={item.name} />
//       <h3>{item.name}</h3>
//       <p>Price: {item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//       <p>Total Price: {totalPrice}</p>
//       <button onClick={() => removeFromCart(item)}>Remove</button>
//     </div>
//   );
// };

// export default CartItem;


import React from 'react';
import CartItem from './CartItem';

// Cart component displays the items in the cart and als ocalculates the total price
const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  
  // Function to calculate the total price of all items in the cart
  const calculateTotal = () => {
    // Reduce function sums up the total price by multiplying each item's price with its quantity
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem
          key={item.id} // Use item id as key
          item={item} // Pass item data to CartItem component
          removeFromCart={removeFromCart} // Pass removeFromCart function with item id
          updateQuantity={updateQuantity} // Pass updateQuantity function
        />
      ))}
      {/* Display the total price */}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;


