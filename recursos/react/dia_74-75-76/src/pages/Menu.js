import productos from './productos.json';
import './Menu.css';

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
              <button className="menu__item-button" onClick={() => window.location.href=`/producto/${producto.id}`}>Ver detalle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;