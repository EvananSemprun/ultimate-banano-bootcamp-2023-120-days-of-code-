import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const products = [
    {
      id: 1,
      image: 'https://example.com/product-image-1.jpg',
      name: 'Producto de ejemplo 1',
      description: 'Esta es una descripción corta del producto de ejemplo 1',
      price: 99.99,
    },
    {
      id: 2,
      image: 'https://example.com/product-image-2.jpg',
      name: 'Producto de ejemplo 2',
      description: 'Esta es una descripción corta del producto de ejemplo 2',
      price: 149.99,
    },
    {
      id: 3,
      image: 'https://example.com/product-image-3.jpg',
      name: 'Producto de ejemplo 3',
      description: 'Esta es una descripción corta del producto de ejemplo 3',
      price: 199.99,
    },
  ];

  const handleAddToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
      setTotal(total - product.price);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`product-page ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Carrito de compras</h1>
      <button onClick={toggleDarkMode}>{darkMode ? 'Modo claro' : 'Modo oscuro'}</button>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card-container">
            <ProductCard
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Carrito de compras</h2>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <ProductCard
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
                <button
                  className="remove-from-cart-button"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Eliminar del carrito
                </button>
              </div>
            ))}
            <p className="total">Total: ${total}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
