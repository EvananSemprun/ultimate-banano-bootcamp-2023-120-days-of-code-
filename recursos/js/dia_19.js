var miCadena;

miCadena = "A";
console.log(miCadena.length);

miCadena = "AB";
console.log(miCadena.length);

var lenguajeDeProgramación = "JavaScript";
console.log(lenguajeDeProgramación.length);

var mensaje = "¡Estoy aprendiendo a programar!";
console.log(mensaje.length);

var mensaje = "Estoy aprendiendo a programar";
console.log(mensaje.length);

var mensaje = "Estoy aprendiendo a programar @#&*";
console.log(mensaje.length);
// -----------------------------------------------------------------------------------------

var lenguajeDeProgramación = "JavaScript";

/*
Cadena:   J a v a S c r i p t
Índices:  0 1 2 3 4 5 6 7 8 9
*/

console.log(lenguajeDeProgramación[0]);
// -----------------------------------------------------------------------

var miCadena = "Jola, Mundo";
console.log(miCadena);

miCadena[0] = "H"; // Error porque las cadenas son inmutables.

miCadena = "Hola, Mundo"; // Se debe asignar una cadena nueva.
console.log(miCadena);

// ----------------------------------------------------------------------------------

var miCadena;

/*
El último índice siempre es longitud - 1 porque comenzamos 
a contar desde 0.
miCadena.length para "JavaScript" es 10.
El último índice es 9.
Cadena:  J  a  v  a  S  c  r  i  p  t 
Índices: 0  1  2  3  4  5  6  7  8  9    
*/

miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 1]);

miCadena = "Python";
console.log(miCadena[miCadena.length - 1]);
//--------------------------------------------------------------------------------------


var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";

/* Concatena las cadenas y crea una nueva cadena que muestre un mensaje. 
Puedes cambiar los valores de las variables.
Por ejemplo: El perro negro corrió rápidamente a la tienda.
             La bicicleta pequeña voló a tienda lentamente.
*/


var palabrasEnBlanco = "El" + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + "a la tienda.";
console.log(palabrasEnBlanco);