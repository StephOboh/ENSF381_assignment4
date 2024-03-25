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

// import React, { useState } from 'react';

// const ProductItem = ({ product, addToCart }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.price}</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//       {showDetails && <p>{product.description}</p>}
//     </div>
//   );
// };

// export default ProductItem;

import React, { useState } from 'react';

const ProductItem = ({ product, addToCart, imageStyle }) => {
    const { name, image, price, description } = product;
    // State to manage whether to show the description or not
    const [showDescription, setShowDescription] = useState(false);
    // Function to handle mouse enter event
    const handleMouseEnter = () => {
        setShowDescription(true);
    };
    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setShowDescription(false);
    };
    // Function to handle adding the product to the cart
    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Display the product image */}
            <img src={image} alt={name} style={{ width: '200px', height: '200px' }} />

            <div>
                {/* Display the product name */}
                <h3>{name}</h3>
                {/* Display the product price */}
                <p>Price: ${price}</p>
                {/* Show description only when mouse is hovered over */}
                {showDescription && <p>Description: {description}</p>}
                {/* Button to add the product to the cart */}
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;


