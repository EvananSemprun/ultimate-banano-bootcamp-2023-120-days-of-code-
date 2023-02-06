/*
Las funciones en JavaScript son bloques de código reutilizables que se pueden invocar en cualquier momento para realizar una tarea específica. 
Se definen mediante la palabra clave "function" y pueden aceptar argumentos o parámetros opcionales. 
Las funciones también pueden devolver un valor utilizando la palabra clave "return".

*/

function mostrar(){
    console.log("hola")
}
mostrar();


//----------------------------------------------------


function sayHello(name) {
    alert("Hi, " + name);
}

sayHello("David");

//----------------------------------------------------
function sumar(a, b) {
    suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
  }
  
  sumar(5, 3);
  sumar(8, 9);
  sumar(2, 4);
  sumar(5, 5);
  
  // Podemos pasar variables como argumentos
  // y sus nombres no tienen que ser iguales a los
  // parámetros.
  var x = 5;
  var y = 3;
  
  sumar(x, y);
  
  // Ejemplo
  
  function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
  }
  
  concatenarTresCadenas("Estoy", "aprendiendo", "a programar");
  
//----------------------------------------------------
var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}

console.log(miVariableGlobal);


//---------------------------------------------------------------------
var miNombre = "Nora";

function mostrarMiNombre() {
  var miNombre = "Gino";
  console.log(miNombre); 
}

mostrarMiNombre();

console.log(miNombre);

//--------------------------------------------------------
/*

return es una palabra clave en JavaScript que se utiliza dentro de una función para devolver un valor a quien la llamó. 
Cuando una función alcanza una declaración return, se detiene la ejecución de la función y se devuelve el valor especificado después de return. 

return es útil para devolver un resultado o un valor calculado desde una función a quien la llamó. 
Esto permite que la función realice un trabajo específico y devuelva un resultado que luego puede ser utilizado en otras partes del código. 
Por ejemplo, una función puede realizar un cálculo complejo y devolver el resultado, lo que permite a la parte principal del programa ser más legible y mantenible.

Además, return permite detener la ejecución de una función cuando se alcanza, lo que es útil para evitar la ejecución de código adicional innecesario. 
Por ejemplo, una función puede realizar una verificación y si se cumple una condición, 
puede devolver un valor y detener su ejecución, en lugar de continuar ejecutando el código adicional. Esto puede ser muy útil para mejorar la eficiencia del código.


*/
function sumar(a, b) {
    return a + b;
  }
  
  sumar(5, 3); // No se muestra nada en la consola
  
  console.log(sumar(5, 3)); // Se muestra el valor retornado
//----------------------------------------------------------------
function sumar(a, b) {
    return a + b;
  }
  
  // Se asigna el valor retornado a una variable 
  var resultado = sumar(5, 3);
  console.log(resultado);
  
  // Ejemplo
  
  function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender " + lenguajeDeProgramacion;
  }
  
  var miMeta = crearCadenaConMeta("JavaScript");
  console.log(miMeta);
//----------------------------------------------------------------