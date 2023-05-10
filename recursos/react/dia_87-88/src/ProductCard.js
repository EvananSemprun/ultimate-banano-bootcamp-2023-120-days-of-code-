import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
    </div>
  );
};

export default ProductCard;
