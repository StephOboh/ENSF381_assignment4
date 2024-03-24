// import React, { useState } from 'react';

// function ProductItem({ product, addToCart }) {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="product-item" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>Price: {product.price}</p>
//       {showDetails && <p>{product.description}</p>}
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductItem;

import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {showDetails && <p>{product.description}</p>}
    </div>
  );
};

export default ProductItem;
