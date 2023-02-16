/*
El Document Object Model (DOM) es una interfaz de programación de aplicaciones (API) para documentos HTML y XML. 
Proporciona una representación estructurada de los documentos, 
permitiendo que los programadores modifiquen su contenido y estilo visual mediante el uso de scripts.

Este modelo permite la modificación del contenido del documento así como su presentación visual,
 en tiempo real.
*/
const btnAumentar = document.querySelector(".btn-info");
/*

document.querySelector es una función en JavaScript que permite buscar elementos del documento por su selector CSS 
y devolver el elemento encontrado. Por ejemplo:


const button = document.querySelector('.button');
En este caso, se obtiene el elemento HTML con la clase button (si lo hay) y 
se guarda en una constante llamada button.


*/
const btndis = document.querySelector(".btn-danger");
const btnre = document.querySelector(".btn-primary");
const span = document.getElementById("span");
let contador = 0;
let storedValue = window.localStorage.getItem("key");
/*
window.localStorage.getItem() es un método que te permite obtener 
el valor de una clave almacenada en la memoria local de una ventana. El método recibe un único parámetro, 
la clave cuyo valor quieres obtener y devuelve el valor de la clave como una cadena.
*/
if (storedValue) {
  contador = Number(storedValue);
  span.textContent = contador;
}

const handleClick = (increment) => {
  contador += increment;
  span.textContent = contador;

  window.localStorage.setItem("key", contador);
};

btnAumentar.addEventListener("click", () => {
  handleClick(1);
});

btndis.addEventListener("click", () => {
  handleClick(-1);
});

btnre.addEventListener("click", () => {
  contador = 0;
  handleClick(0);
});
