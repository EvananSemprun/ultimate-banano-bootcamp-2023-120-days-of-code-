import React from 'react';
import productos from './productos.json';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menu__list">
        {productos.map((producto) => (
          <div key={producto.id} className="menu__item">
            <img src={producto.imagen} alt={producto.nombre} className="menu__item-img" />
            <div className="menu__item-content">
              <h2 className="menu__item-title">{producto.nombre}</h2>
              <p className="menu__item-description">{producto.descripcion}</p>
              <p className="menu__item-price">Precio: ${producto.precio}</p>
              {/* Agregar el enlace con el ID del producto */}
              <Link to={`/producto/${producto.id}`} className="menu__item-button">Ver detalle</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;