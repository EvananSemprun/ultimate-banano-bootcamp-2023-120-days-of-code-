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
/*
El operador condicional ternario en JavaScript solo permite la evaluación de dos expresiones basadas en una condición. 
Si necesitas evaluar múltiples condiciones, debes anidar varios operadores ternarios o utilizar una sentencia if-else if-else completa.
*/

let num9 = 5;
let result3 = num9 > 0 ? "positive" : num9 < 0 ? "negative" : "zero";
console.log(result3); // Output: positive

/*
 En este ejemplo, la primera condición evalúa si num es mayor que 0. Si es verdadero, se devuelve "positive". 
 Si es falsa, se evalúa la segunda condición, que evalúa si num es menor que 0. Si es verdadero, se devuelve "negative". Si es falsa, se devuelve "zero".

Aquí hay un ejemplo de código que utiliza una sentencia if-else if-else para evaluar múltiples condiciones:
 */

let num10 = 5;
if (num10 > 0) {
  console.log("positive");
} else if (num10 < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
/*
En este ejemplo, la primera sentencia if evalúa si num es mayor que 0. Si es verdadero, se imprime "positive". 
Si es falsa, se evalúa la sentencia else if, que evalúa si num es menor que 0. Si es verdadero, se imprime "negative". 
Si es falsa, se ejecuta la sentencia else y se imprime "zero".

En conclusión, para evaluar múltiples condiciones en JavaScript, puedes utilizar varios operadores ternarios anidados o una sentencia if-else if-else completa. 
La mejor opción depende de la complejidad de la lógica y de la legibilidad del código.
*/

//--------------------------------------

/*
var y let son dos formas de declarar variables en JavaScript. Ambas se utilizan para almacenar valores, 
pero tienen algunas diferencias importantes.

var es una forma antigua de declarar variables en JavaScript y se comporta de manera diferente a let y const. 
La declaración de una variable con var es accesible en todo el ámbito, lo que significa que se puede acceder a la variable en cualquier parte del código. 
Además, var no tiene un ámbito de bloque, lo que significa que se puede reasignar y redefinar desde cualquier parte del código.*/


var x = 5;

if (true) {
  var x = 10;
  console.log(x); // Output: 10
}

console.log(x); // Output: 10
/*
let, por otro lado, es una forma más reciente de declarar variables en JavaScript y es parte de ECMAScript 6. 
let tiene un ámbito de bloque, lo que significa que la variable sólo es accesible dentro del bloque en el que se declaró. 
Además, let no permite la redefinición de la variable dentro del mismo bloque.
*/
let z = 5;

if (true) {
  let z = 10;
  console.log(z); // Output: 10
}

console.log(z); // Output: 5

/*
En conclusión, var es una forma antigua de declarar variables en JavaScript y let es una forma más reciente y moderna. 
Es recomendable utilizar let en lugar de var por su ámbito de bloque y sus limitaciones en la redefinición.

*/

//-----------------------------------------

/*
Las funciones de flecha (arrow functions) son una forma concisa de escribir funciones en JavaScript. 
Son una alternativa a las funciones tradicionales y tienen una sintaxis más corta y sencilla.
*/

// Función tradicional
function sum(a, b) {
  return a + b;
}

// Función de flecha
const sum = (a, b) => a + b;

/*
Como se puede ver, la función de flecha utiliza la sintaxis const sum = (a, b) => a + b en lugar de la sintaxis tradicional function sum(a, b) { return a + b; }. 
La palabra clave return también se puede omitir si la función de flecha solo tiene una expresión.

Además, las funciones de flecha tienen un comportamiento diferente en cuanto a this en comparación con las funciones tradicionales. 
En las funciones tradicionales, el valor de this puede variar según la forma en que se llame la función. En las funciones de flecha, el valor de this se basa en el contexto en el que se definió la función y no cambia.
*/

// Función tradicional
const obj2 = {
  name: 'John Doe',
  printName: function() {
    console.log(this.name);
  }
};

// Función de flecha
const obj = {
  name: 'John Doe',
  printName: () => {
    console.log(this.name);
  }
};
/*
En el ejemplo anterior, la función tradicional printName imprime el valor de name que está en el objeto obj. 
La función de flecha printName imprimirá undefined en su lugar, ya que this en una función de flecha se basa en el contexto global y no en el objeto obj.

En conclusión, las funciones de flecha son una forma más corta y concisa de escribir funciones en JavaScript. 
Sin embargo, es importante entender cómo funcionan y cómo difieren de las funciones tradicionales en términos de this.
*/
//------------------------------------------

//Las funciones de flecha se pueden usar con o sin parámetros. Aquí hay algunos ejemplos de cómo se pueden utilizar funciones de flecha con parámetros:

// Función de flecha con dos parámetros
const sum = (a, b) => a + b;

// Función de flecha con un solo parámetro
const double = a => a * 2;

// Función de flecha sin parámetros
const greeting = () => console.log('Hello, World!');
/*
En el primer ejemplo, la función de flecha sum toma dos parámetros, a y b, y devuelve su suma. 
En el segundo ejemplo, la función de flecha double toma un solo parámetro, a, y devuelve su doble. 
En el tercer ejemplo, la función de flecha greeting no toma ningún parámetro y simplemente imprime un mensaje en la consola.

En general, las funciones de flecha se pueden utilizar con cualquier número de parámetros y tienen una sintaxis clara y concisa para manejarlos.
*/

//--------------------------------

/* 

El operador de resto (...) es una nueva característica en JavaScript que permite trabajar con un número variable de argumentos en una función. 
Se usa para agrupar los argumentos restantes en un solo arreglo. 
*/
function sumAll(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));  // Output: 15
/*
En este ejemplo, la función sumAll toma cualquier número de argumentos y los agrupa en un arreglo llamado args. 
Luego, se suman todos los elementos de este arreglo para obtener la suma total.

El operador de resto es muy útil cuando se trabaja con funciones que pueden tomar un número variable de argumentos, 
ya que permite acceder a todos estos argumentos de manera conveniente en un arreglo.

*/