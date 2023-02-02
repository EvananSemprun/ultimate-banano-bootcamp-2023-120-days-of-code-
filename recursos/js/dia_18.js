let datos = ["juan " ,20, "jose"];
document.write(datos[0]);
/*

Las variables de JavaScript son contenedores de valores de datos. Los objetos también son variables, 
pero pueden contener muchos valores. Piense en un objeto como una lista de valores que se escriben como pares nombre:valor ,
 con los nombres y los valores separados por dos puntos. Ejemplo:
*/
document.write("<br>");

let alumnos ={
    nombre: "carlos",
    apellido: "medina",
    edad : "10 años"
};

let nombre = alumnos["nombre"];
let apellido = alumnos["apellido"];
let edad = alumnos["edad"];

document.write("<br>");

// document.write(nombre);

let datos2 = `nombre alumnos es <b> ${alumnos["nombre"]} </b> <br>`;

document.write(datos2);
//---------------------------

var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);

var notas = [95, 67, 89, 56];
console.log(notas);

//---------------------------------------

var listaDeEstudiantes = [["Nora", 97], ["Gino", 78]];
console.log(listaDeEstudiantes);

var listaDeProductos = [["Camisa", 5.67, "S134"], ["Celular", 250, "S356"], ["Zapatos", 36.7, "S678"]];
console.log(listaDeProductos);

var dato = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]];
console.log(dato);


//----------------------------------------------------------
var miArreglo = [10, 20, 30];

/*
Arreglo:  [10, 20, 30]
Índices:    0   1   2
*/

console.log(miArreglo[0]); // 10
console.log(miArreglo[1]); // 20
console.log(miArreglo[2]); // 30

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);

//----------------------------------------------
var miArreglo = [10, 20, 30];

console.log(miArreglo);
miArreglo[0] = 40;
console.log(miArreglo);

miArreglo[1] = "Hola";
console.log(miArreglo);

miArreglo[1] = [1, 2, 3];
console.log(miArreglo);
