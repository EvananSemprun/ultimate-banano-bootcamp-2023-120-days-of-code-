import { useState } from "react";
import "./App.css"; // Importamos el archivo CSS

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    setTotal(total + item.price);
  };

  const removeItem = (index) => {
    const itemToRemove = items[index];
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
    setItems(newItems);
    setTotal(total - itemToRemove.price);
  };

  return (
    <div className="cart-container">
      <h1>Carrito de compras</h1>
      <div className="cart-items">
        <h2>Productos</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} €
              <button onClick={() => removeItem(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h3>Total: {total} €</h3>
      </div>
      <div className="cart-form">
        <h2>Añadir producto</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = event.target.elements.name.value;
            const price = parseFloat(event.target.elements.price.value);
            addItem({ name, price });
            event.target.reset();
          }}
        >
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" id="name" required />
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" step="0.01" min="0" required />
          <button type="submit">Añadir</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
