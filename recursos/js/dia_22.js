/*

Los operadores en JavaScript son símbolos que le permiten a un programador realizar operaciones matemáticas, de comparación, asignación, etc. 
Algunos de los operadores más comunes en JavaScript incluyen:

Aritméticos: +, -, *, /, %, ++, --
Asignación: =, +=, -=, *=, /=, %=
Comparación: ==, ===, !=, !==, >, <, >=, <=
Lógicos: &&, ||, !
Condicionales: ? :
Inclusión y tipo: typeof, instanceof.
Cada operador tiene una función específica y su uso depende del contexto y de las necesidades específicas de un programa.

*/
var num1 = 10;
num1 += 5; // num1 ahora es 15
num1 -= 2; // num1 ahora es 13
num1 *= 3; // num1 ahora es 39
num1 /= 2; // num1 ahora es 19.5
//----------------------------------------------------------------
var num1 = 10;
var num2 = 20;
var result = num1 == num2;
console.log(result); // false
result = num1 === num2;
console.log(result); // false
result = num1 != num2;
console.log(result); // true
result = num1 !== num2;
console.log(result); // true
//----------------------------------------------------------------
var num1 = 10;
var num2 = 20;
var result = (num1 < num2) && (num1 !== 0);
console.log(result); // true
result = (num1 > num2) || (num1 !== 0);
console.log(result); // true
result = !(num1 < num2);
console.log(result); // false
//----------------------------------------------------------------
var num1 = 10;
var num2 = 20;
var result = num1 < num2 ? "num1 es menor que num2" : "num1 no es menor que num2";
console.log(result); // "num1 es menor que num2"
//----------------------------------------------------------------
var num = 10;
var result = typeof num;
console.log(result); // "number"
var str = "Hello World";
result = typeof str;
console.log(result); // "string"
var arr = [1, 2, 3];
result = Array.isArray(arr);
console.log(result); // true
result = arr instanceof Array;
console.log(result); // true
//----------------------------------------------------------------