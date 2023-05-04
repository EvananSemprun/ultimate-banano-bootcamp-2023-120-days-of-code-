import React from 'react';
import canciones from './canciones.json';
import ReproductorMusica from './ReproductorMusica';
import './App.css'; // importamos el archivo de estilos CSS

function App() {
  return (
    <div className="App">
      <h1>Mi reproductor de música</h1>
      <ReproductorMusica canciones={canciones.canciones} />
    </div>
  );
}

export default App;