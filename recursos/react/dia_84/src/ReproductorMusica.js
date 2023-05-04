import React, { useState } from 'react';
import './ReproductorMusica.css'; // importamos el archivo de estilos CSS

const ReproductorMusica = ({ canciones }) => {
  const [cancionActual, setCancionActual] = useState(null);
  const [estaReproduciendo, setEstaReproduciendo] = useState(false);

  const reproducirCancion = (cancion) => {
    if (cancionActual === cancion && estaReproduciendo) {
      setEstaReproduciendo(false);
      cancion.pause();
    } else if (cancionActual === cancion && !estaReproduciendo) {
      setEstaReproduciendo(true);
      cancion.play();
    } else {
      if (cancionActual) {
        cancionActual.pause();
      }
      setCancionActual(cancion);
      setEstaReproduciendo(true);
      cancion.play();
    }
  };

  return (
    <div className="reproductor">
      <h2>Reproductor de Música</h2>
      {canciones.map((cancion) => (
        <div key={cancion.url} className="cancion">
          <img src={cancion.portada} alt={cancion.album} />
          <div className="informacion">
            <h3>{cancion.titulo}</h3>
            <p>{cancion.artista} - {cancion.album} ({cancion.duracion})</p>
          </div>
          <button className={cancionActual === new Audio(cancion.url) && estaReproduciendo ? 'pausa' : 'reproduce'} onClick={() => reproducirCancion(new Audio(cancion.url))}>
            <i className={`fas fa-${cancionActual === new Audio(cancion.url) && estaReproduciendo ? 'pause' : 'play'}`}></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReproductorMusica;
