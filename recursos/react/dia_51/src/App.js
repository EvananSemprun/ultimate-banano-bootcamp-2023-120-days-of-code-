import React, { useState } from 'react';
import './App.css';
import Gente from './components/persons/Gente';
import RandomUser from './components/ramdonusers/RandomUser';
/*

useState es un hook en React que te permite agregar estado a un componente funcional. 
Con useState, puedes declarar una variable de estado dentro de un componente y actualizar su valor en función de las
 interacciones del usuario o los cambios en la lógica de tu aplicación.

El hook useState toma un argumento inicial que establece el valor inicial del estado y devuelve una tupla con dos elementos:
 el primer elemento es el valor actual del estado y el segundo elemento es una función que te permite actualizar el estado.

Para actualizar el estado, simplemente llamas a la función de actualización con el nuevo valor que deseas asignar al estado. 
Cuando el estado cambia, React vuelve a renderizar el componente y actualiza el DOM con los cambios correspondientes.

El hook useState es una herramienta muy útil para agregar interactividad y dinamismo a tus componentes funcionales en React. 
Sin embargo, es importante usarlo con cuidado y asegurarse de que no estés creando un exceso de re-renderizados o 
cambios innecesarios en el estado.

*/

function Counter() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const sumarClick = () => {
    setCounter(counter + 1);
  };

  const toggleCounter = () => {
    setShow(!show);
  };

  return (
    <div className="counter text-center mt-4">
      <h1>Counter</h1>
      {show ? <p>{counter}</p> : null}
      <button className="btn btn-primary" onClick={sumarClick}>
        Sumar
      </button>
      <button className="btn btn-primary" onClick={toggleCounter}>
        Toggle Counter
      </button>
      
    </div>
  );
}

function Person(props) {
  const { color, nombre, edad } = props;

  return (
    <div className="person" style={{ backgroundColor: color }}>
      <h3>Nombre: {nombre}</h3>
      <p>Edad: {edad}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <Person nombre="Pedro" edad="10" color="red" />
      <Person nombre="Ale" edad="5" color="yellow" />
      <Counter />
      <Gente/>
      <RandomUser/>
    </div>
  );
}

export default App;
/*

React es una biblioteca de JavaScript para construir interfaces de usuario. 
A continuación, se describen algunos de los principales componentes que se utilizan en React:

Componentes: Son elementos fundamentales en React. 
Los componentes se pueden considerar como pequeñas piezas de código que pueden reutilizarse. 
Un componente puede ser una imagen, un botón, un formulario, una barra de navegación, etc. Los componentes se crean con la ayuda de una clase o función. 
Los componentes de clase se crean utilizando la sintaxis de la clase, mientras que los componentes funcionales se crean utilizando funciones.

Props: Los props son objetos que se utilizan para pasar datos de un componente a otro. 
Estos datos son pasados como atributos en el componente padre y se acceden en el componente hijo. 
Los props son inmutables, es decir, no se pueden cambiar en el componente hijo.

Estado: El estado es un objeto que se utiliza para almacenar datos que pueden cambiar en un componente. Cuando cambia el estado de un componente,
 React vuelve a renderizar el componente. El estado solo puede ser modificado utilizando el método setState().

Ciclo de vida del componente: El ciclo de vida de un componente en React es el conjunto de fases por las que pasa un componente desde que se crea 
hasta que se destruye. Los principales métodos del ciclo de vida son componentDidMount(), componentDidUpdate() y componentWillUnmount().

Renderizado condicional: El renderizado condicional se utiliza para renderizar componentes en función de ciertas condiciones. 
El renderizado condicional se puede hacer utilizando operadores ternarios, declaraciones if/else, etc.

Renderizado de listas: El renderizado de listas se utiliza para renderizar una lista de elementos. Para ello, se utiliza el método map() en JavaScript.

Estos son algunos de los principales componentes que se utilizan en React. 
Con estos componentes, puedes crear interfaces de usuario altamente dinámicas y personalizables.

*/