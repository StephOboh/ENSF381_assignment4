// import Headers, Productist, Cart, Footer
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function Productpage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(itemToRemove) {
    const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  }

  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td><ProductList addToCart={addToCart} /></td>
          <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} /></td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
