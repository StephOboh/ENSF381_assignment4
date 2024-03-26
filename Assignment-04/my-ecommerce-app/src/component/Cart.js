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


// import React from 'react';
// import CartItem from './CartItem';

// const Cart = ({ cart, removeFromCart }) => {
//   const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       {cart.map((item) => (
//         <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
//       ))}
//       <p>Total Price: {totalPrice}</p>
//     </div>
//   );
// };

// export default Cart;

import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  // THIS Function is used  to calculate the accumulated price of each product
  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  // This Function is used to calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  return (
    <div className="cart" style={{ marginLeft: '350px' }}>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} /> {/* here i am resizing the images to be 200px by 200px in order to have amore unformly looking page */}
          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Item Total: ${calculateItemTotal(item)}</p> {/*this will show the accumulated price of an indivudla product by its total uantity */}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;






