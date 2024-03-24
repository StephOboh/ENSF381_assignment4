// // import Headers, Productist, Cart, Footer
// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import ProductList from './ProductList';
// import Cart from './Cart';
// import Footer from './Footer';
// // import ProductPage from './src/components/Productpage'

// function Productpage() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
//     if (savedCartItems) {
//       setCartItems(savedCartItems);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   function addToCart(product) {
//     const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
//     if (existingItemIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex].quantity++;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   }

//   function removeFromCart(itemToRemove) {
//     const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
//     setCartItems(updatedCartItems);
//   }

//   return (
//     <div className="product-page">
//       <Header />
//       <table>
//         <tr>
//           <td><ProductList addToCart={addToCart} /></td>
//           <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} /></td>
//         </tr>
//       </table>
//       <Footer />
//     </div>
//   );
// }

// export default Productpage;


// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import ProductList from './ProductList';
// import Cart from './Cart';
// import Footer from './Footer';

// const ProductPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart'));
//     if (storedCart) {
//       setCart(storedCart);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (product) => {
//     const updatedCart = cart.map((item) =>
//       item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//     );
//     setCart(updatedCart.filter((item) => item.quantity > 0));
//   };

//   return (
//     <div className="product-page">
//       <Header />
//       <table>
//         <h1>Producs Page</h1>
//         <tr>
//           <td><ProductList addToCart={addToCart} /></td>
//           <td style={{ verticalAlign: 'top' }}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
//         </tr>
//       </table>
//       <Footer />
//     </div>
//   );
// };

// export default ProductPage;
