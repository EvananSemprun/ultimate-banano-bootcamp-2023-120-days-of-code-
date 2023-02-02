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