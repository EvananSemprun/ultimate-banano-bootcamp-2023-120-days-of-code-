var estaciones = ["Invierno", "Otoño", "Primavera"]; // Orden alfabético

console.log(estaciones);
estaciones.push("Verano");  // Agregar al final del arreglo
console.log(estaciones);
// ----------------------------------------------------
var estaciones;

estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];

estacion = estaciones.pop();

console.log(estaciones);
console.log(estacion);

//--------------------------------
var estaciones = ["Invierno", "Otoño", "Primavera"]; 

estaciones.shift();  // Remover primer elemento del arreglo

console.log(estaciones);
//------------------------------------------------------
var estaciones = ["Invierno", "Otoño", "Primavera"]; 

estaciones.unshift("Verano");   // Agregar al principio del arreglo

console.log(estaciones);

//------------------------------------

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7], ["pollo", 7]];

console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");;

console.log("Voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + ".");

console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");

console.log("Voy a comprar " + miListaDeCompras[3][1] + " unidades de " + miListaDeCompras[3][0] + ".");

console.log("Voy a comprar " + miListaDeCompras[4][1] + " unidades de " + miListaDeCompras[4][0] + ".");

console.log("Voy a comprar " + miListaDeCompras[5][1] + " unidades de " + miListaDeCompras[5][0] + ".");