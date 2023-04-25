import React, { useState } from 'react';
import productos from './productos.json';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  const [searchValue, setSearchValue] = useState('');

  const filteredProductos = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="menu">
      <div className="menu__header">
        <h1 className="menu__title">Nuestro Menú</h1>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Buscar productos..." className="menu__search-input" />
      </div>
      <div className="menu__list">
        {filteredProductos.map((producto) => (
          <div key={producto.id} className="menu__item">
            <img src={producto.imagen} alt={producto.nombre} className="menu__item-img" />
            <div className="menu__item-content">
              <h2 className="menu__item-title">{producto.nombre}</h2>
              <p className="menu__item-description">{producto.descripcion}</p>
              <p className="menu__item-price">${producto.precio}</p>
              <Link to={`/producto/${producto.id}`} className="menu__item-button">Ver detalle</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;