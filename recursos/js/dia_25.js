/*

"Math" es un objeto en JavaScript que proporciona métodos y propiedades para realizar operaciones matemáticas. 
Aquí hay algunas de las propiedades más comunes de Math en JavaScript:

Math.E: representa el número matemático constante e, aproximadamente 2.718.

Math.LN2: representa el logaritmo natural de 2, aproximadamente 0.693.

Math.LN10: representa el logaritmo natural de 10, aproximadamente 2.302.

Math.LOG2E: representa el logaritmo base 2 de e, aproximadamente 1.442.

Math.LOG10E: representa el logaritmo base 10 de e, aproximadamente 0.434.

Math.PI: representa el número pi, aproximadamente 3.14.

Math.SQRT1_2: representa la raíz cuadrada de 1/2, aproximadamente 0.707.

Math.SQRT2: representa la raíz cuadrada de 2, aproximadamente 1.414.

Math.abs(x): devuelve el valor absoluto de x, es decir, el valor sin signo.

Math.ceil(x): devuelve el entero más pequeño que es mayor o igual a x.

Math.floor(x): devuelve el entero más grande que es menor o igual a x.

Math.round(x): devuelve el entero más cercano a x.

Math.max(a, b, c, ...): devuelve el número más grande de una lista de valores.

Math.min(a, b, c, ...): devuelve el número más pequeño de una lista de valores.

Math.pow(base, exponente): devuelve la potencia de base a exponente.

Math.sqrt(x): devuelve la raíz cuadrada de x.

Math.exp(x): devuelve e elevado a la potencia de x.

Math.log(x): devuelve el logaritmo natural de x.

Math.random(): devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusive).

Math.trunc(x): devuelve la parte entera de x, eliminando cualquier fracción.

Math.sign(x): devuelve el signo de x, es decir, 1 si x es positivo, -1 si x es negativo y 0 si x es 0.

Math.acos(x): devuelve el arcocoseno de x, en radianes.

Math.asin(x): devuelve el arcoseno de x, en radianes.

Math.atan(x): devuelve el arcotangente de x, en radianes.

Math.cos(x): devuelve el coseno de x, donde x está en radianes.

Math.sin(x): devuelve el seno de x, donde x está en radianes.

Math.tan(x): devuelve la tangente de x, donde x está en radianes.

*/


// Calcular el valor absoluto de un número:
let num = -5;
let absNum = Math.abs(num);
console.log(absNum); // Output: 5


//---------------------------------------------------
//Redondear un número al entero más cercano:
let num2 = 5.6;
let roundedNum = Math.round(num2);
console.log(roundedNum); // Output: 6


//---------------------------------------------------
// Calcular el máximo y el mínimo de una lista de números:
let numbers = [3, 5, 2, 8, 1];
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);
console.log(`Max: ${maxNum}, Min: ${minNum}`); // Output: Max: 8, Min: 1

//---------------------------------------------------
let randomNum = Math.random();
console.log(randomNum); // Output: a random number between 0 (inclusive) and 1 (exclusive)

//---------------------------------------------------
//Calcular la raíz cuadrada de un número:
let num3 = 9;
let sqrtNum = Math.sqrt(num3);
console.log(sqrtNum); // Output: 3

//---------------------------------------------------
// Calcular el coseno de un ángulo en radianes:

let angle = 90;
let radians = angle * (Math.PI / 180);
let cosine = Math.cos(radians);
console.log(cosine); // Output: 0


function generarFraccionAleatoria() {
    // Generar y retornar número entre 0 y 1
    // 0 inclusive. 1 no está incluido en los posibles resultados.
    return Math.random();
  }
  
  console.log(generarFraccionAleatoria());
  console.log(generarFraccionAleatoria());
  console.log(generarFraccionAleatoria());
  console.log(generarFraccionAleatoria());
  
  var numeroAleatorio = Math.random();
  console.log(numeroAleatorio);
//---------------------------------------------------
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

function generarEnteroAleatorio(limiteSuperior) {
  // Generar un número aleatorio entre 0 y el límite
  // superior (sin incluirlo).
  return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));

// Con un ciclo

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
}
//---------------------------------------------------------------
function rangoAleatorio(limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
  }
  
  console.log(rangoAleatorio(3, 8));
  
  // Con un ciclo
  
  for (var i = 0; i < 15; i++) {
    console.log(rangoAleatorio(3, 8));
  }
//---------------------------------------------------

/*

parseInt() es una función en JavaScript que se utiliza para convertir una cadena de texto en un número entero. 
La sintaxis de parseInt() es la siguiente:

parseInt(string, radix);

string es la cadena de texto que se desea convertir en un número entero.
radix es un parámetro opcional que especifica la base numérica en la que se representa el número. El valor predeterminado es 10.

Es importante tener en cuenta que parseInt() solo convierte la porción inicial de la cadena de texto que puede ser interpretada como un número entero. 
Si la cadena de texto no puede ser interpretada como un número entero, parseInt() devuelve NaN (Not-a-Number).
*/

//---------------------------------------------------
// Convertir una cadena de texto en un número entero:
let numAsString = "123";
let num4 = parseInt(numAsString);
console.log(num4); // Output: 123


//---------------------------------------------------

//Convertir una cadena de texto en un número entero con una base específica:
let binaryAsString = "11";
let binary = parseInt(binaryAsString, 2);
console.log(binary); // Output: 3

//---------------------------------------------------
//Convertir una cadena de texto que contiene un número y otros caracteres en un número entero:

let mixedString = "123abc";
let num5 = parseInt(mixedString);
console.log(num5); // Output: 123
//---------------------------------------------------

console.log(parseInt("5"));
console.log(parseInt("-47"));
console.log(parseInt("0"));

console.log(parseInt("6.7"));
console.log(parseInt("6.2"));

console.log(parseInt(6.7));

console.log(parseInt("abc")); // NaN

// Ejemplo con variables

var a = "5";
var b = "7";

console.log(a + b);

var a = parseInt("5");
var b = parseInt("7");

console.log(a + b);

//---------------------------------------------------
console.log(parseInt("110111", 2)); // Binario
console.log(parseInt(110111, 2));   // Binario

console.log(parseInt("3E0A", 16));  // Hexadecimal
//---------------------------------------------------
/*
El operador condicional ternario en JavaScript es una forma concisa de escribir una sentencia if-else. La sintaxis es la siguiente:

condition ? expression1 : expression2;


condition es una expresión que se evalúa y determina si es verdadera o falsa.
expression1 es la expresión que se evalúa si condition es verdadera.
expression2 es la expresión que se evalúa si condition es falsa.

*/

//--------------------------------------

// Asignar un valor a una variable basado en una condición:
let num6 = 5;
let result2 = num6 > 0 ? "positive" : "negative";
console.log(result2); // Output: positive

//--------------------------------------
let num7 = 5;
let result = num7 % 2 === 0 ? "even" : "odd";
console.log(result); // Output: odd
//--------------------------------------
// Imprimir un mensaje basado en una condición:
let num8 = 5;
console.log(num8 > 0 ? "positive" : "negative"); // Output: po
//--------------------------------------

//--------------------------------------


