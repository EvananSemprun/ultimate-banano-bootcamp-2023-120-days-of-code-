import React from 'react';
import productos from './productos.json';
import './ProductoDetalle.css';
import { useParams } from 'react-router-dom';

function ProductoDetalle() {
  const { id } = useParams(); // Obtener el ID del producto de los parámetros de la URL
  const producto = productos.find((p) => p.id === parseInt(id)); // Buscar el producto correspondiente al ID
  
  if (!producto) { // Manejar el caso en el que el producto no exista
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="producto-detalle">
      <div className="producto-detalle__imagen-container">
        <img src={producto.imagen} alt={producto.nombre} className="producto-detalle__imagen" />
      </div>
      <div className="producto-detalle__info-container">
        <h1 className="producto-detalle__nombre">{producto.nombre}</h1>
        <p className="producto-detalle__descripcion">{producto.descripcion}</p>
        <div className="producto-detalle__atributos">
          <div className="producto-detalle__atributo">
            <p className="producto-detalle__atributo-titulo">Categoría:</p>
            <p className="producto-detalle__atributo-contenido">{producto.categoria}</p>
          </div>
          <div className="producto-detalle__atributo">
            <p className="producto-detalle__atributo-titulo">Disponible:</p>
            <p className="producto-detalle__atributo-contenido">{producto.disponible ? "Sí" : "No"}</p>
          </div>
          <div className="producto-detalle__atributo">
            <p className="producto-detalle__atributo-titulo">Calorías:</p>
            <p className="producto-detalle__atributo-contenido">{producto.calorias}</p>
          </div>
          <div className="producto-detalle__atributo">
            <p className="producto-detalle__atributo-titulo">Precio:</p>
            <p className="producto-detalle__atributo-contenido">${producto.precio}</p>
          </div>
          <div className="producto-detalle__atributo">
            <p className="producto-detalle__atributo-titulo">Ingredientes:</p>
            <ul className="producto-detalle__ingredientes">
              {producto.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;