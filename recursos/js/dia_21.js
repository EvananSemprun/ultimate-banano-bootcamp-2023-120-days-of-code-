/*


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