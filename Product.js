import React, { useContext } from 'react';
import './Product.css';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return null; // Handle case when product is undefined
  }

  const { index, title, imageUrl, price } = product; // Destructure the product object

  return (
    <div id={`album${index + 1}`}>
      <h3>{title}</h3>
      <div className="image-container">
        <img className="prod-images" src={imageUrl} alt="" />
      </div>
      <div className="prod-details">
        <span>${price.toFixed(2)}</span>
        <button className="shop-item-button" type="button" onClick={() => addToCart(product)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
