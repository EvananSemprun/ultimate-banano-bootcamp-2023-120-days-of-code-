import React, { useState } from "react";

import './generador.css';
function SecuenciaNumerica() {
  const [secuencia, setSecuencia] = useState("fibonacci");
  const [numeroElementos, setNumeroElementos] = useState(10);
  const [secuenciaGenerada, setSecuenciaGenerada] = useState([]);

  function generarSecuencia(e) {
    e.preventDefault();
    let secuenciaGenerada = [];
    switch (secuencia) {
      case "fibonacci":
        let a = 0;
        let b = 1;
        for (let i = 0; i < numeroElementos; i++) {
          secuenciaGenerada.push(a);
          let temp = a + b;
          a = b;
          b = temp;
        }
        break;
      case "primo":
        let numeroActual = 2;
        while (secuenciaGenerada.length < numeroElementos) {
          let esPrimo = true;
          for (let i = 2; i <= Math.sqrt(numeroActual); i++) {
            if (numeroActual % i === 0) {
              esPrimo = false;
              break;
            }
          }
          if (esPrimo) {
            secuenciaGenerada.push(numeroActual);
          }
          numeroActual++;
        }
        break;
      case "aritmetica":
        let a0 = 1;
        let d = 2;
        for (let i = 0; i < numeroElementos; i++) {
          secuenciaGenerada.push(a0 + i * d);
        }
        break;
      case "geometrica":
        let a1 = 1;
        let r = 2;
        for (let i = 0; i < numeroElementos; i++) {
          secuenciaGenerada.push(a1 * Math.pow(r, i));
        }
        break;
      default:
        break;
    }
    setSecuenciaGenerada(secuenciaGenerada);
  }

  return (
    <div>
      <h1>Generador de secuencias numéricas</h1>
      <form onSubmit={generarSecuencia}>
        <label htmlFor="secuencia">Secuencia:</label>
        <select
          id="secuencia"
          value={secuencia}
          onChange={(e) => setSecuencia(e.target.value)}
        >
          <option value="fibonacci">Fibonacci</option>
          <option value="primo">Números primos</option>
          <option value="aritmetica">Sucesión aritmética</option>
          <option value="geometrica">Sucesión geométrica</option>
        </select>
        <label htmlFor="numeroElementos">Número de elementos:</label>
        <input
          id="numeroElementos"
          type="number"
          min="1"
          max="100"
          value={numeroElementos}
          onChange={(e) => setNumeroElementos(parseInt(e.target.value))}
        />
        <button className="btngenerar" type="submit">Generar</button>
      </form>
      {secuenciaGenerada.length > 0 && (
        <div>
          <h2>Secuencia generada:</h2>
          <ul>
            {secuenciaGenerada.map((numero) => (
              <li key={numero}>{numero}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SecuenciaNumerica;
