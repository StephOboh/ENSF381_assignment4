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

import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
// import productsData from '../data/products';

const ProductPage = () => {
  // Define state for the cart using useState hook
  const [cart, setCart] = useState(() => {
    // Retrieve saved cart from localStorage (this is for saving the cart when the page is left or reloaded) or initialize an empty array if not found
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes using useEffect hook to save it when refreshed or when leaving the mpage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart];
    // Find the index of the existing item in the cart, if it exists already on the cart, (this will just ncrement quantity not add a duplicate)
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

    // If the item exists in the cart, increase its quantity by 1; otherwise, add it to the cart with a quantity of 1
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    // Update the cart state with the updatedCart array
    setCart(updatedCart);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    // Create a copy of the current cart array
    const updatedCart = [...cart];

    // Find the index of the item to be removed based on its productId
    const existingItemIndex = updatedCart.findIndex(item => item.id === productId);

    // Check if the item exists in the cart
    if (existingItemIndex !== -1) {
      // If the quantity of the item is greater than 1, reduce it by 1
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        // If the quantity is 1, completely remove the item from the cart
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <div className="product-page">
      {/* Render the header component */}
      <Header />

      {/* Table structure */}
      <table>
        <tr>
          <td>
            {/* Render the product list component and pass the addToCart function as a prop */}
            <ProductList addToCart={addToCart} />
          </td>
          <td style={{ verticalAlign: 'top' }}>
            {/* Render the cart component and pass the cart state and removeFromCart function as props */}
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </td>
        </tr>
      </table>

      {/* Render the footer component */}
      <Footer />
    </div>
  );
};

export default ProductPage;
















