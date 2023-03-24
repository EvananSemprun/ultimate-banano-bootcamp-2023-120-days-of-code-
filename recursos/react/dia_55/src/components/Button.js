import React from 'react';

export default function Button({color, fondo, border, texto, funct}) {

  return (
    <button 
      style={{
        backgroundColor: fondo,
        color: color,
        border: border
      }}
      onClick={funct}>{texto}</button>
  )
}

