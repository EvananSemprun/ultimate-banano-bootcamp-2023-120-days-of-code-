/*
    Muy a menudo, cuando escribe código, desea realizar diferentes acciones para diferentes decisiones.

Puede usar declaraciones condicionales en su código para hacer esto.
*/

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
    alert("JavaScript is easy to learn.");
}

/*
   Utilice la if declaración para especificar un bloque de código JavaScript que se ejecutará si una condición es verdadera.

    Utilice la elseinstrucción para especificar un bloque de código que se ejecutará si la condición es falsa.

    Utilice la else ifdeclaración para especificar una nueva condición si la primera condición es falsa.


*/
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
    alert("This is my first condition");
}
else {
    alert("This is my second condition");
}

var course = 1;
if (course == 1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}

var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}
/*

    La switchdeclaración se utiliza para realizar diferentes acciones basadas en diferentes condiciones.

    Utilice la switchinstrucción para seleccionar uno de los muchos bloques de código que se ejecutarán.

    Así es como funciona:

La expresión de cambio se evalúa una vez.
El valor de la expresión se compara con los valores de cada caso.
Si hay una coincidencia, se ejecuta el bloque de código asociado.
Si no hay ninguna coincidencia, se ejecuta el bloque de código predeterminado

Cuando JavaScript llega a una break palabra clave, sale del bloque interruptor.

Esto detendrá la ejecución dentro del bloque del interruptor.

No es necesario romper el último caso en un bloque de cambio. El bloque se rompe (termina) allí de todos modos.

La defaultpalabra clave especifica el código que se ejecutará si no hay coincidencia de mayúsculas y minúsculas:

*/ 
document.write("<br />");
for (i=1; i<=5; i++) {
    document.write(i + "<br />");
}

/*

La forinstrucción crea un bucle con 3 expresiones opcionales:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
La expresión 1 se ejecuta (una vez) antes de la ejecución del bloque de código.

La expresión 2 define la condición para ejecutar el bloque de código.

La expresión 3 se ejecuta (todas las veces) después de que se haya ejecutado el bloque de código.




*/

document.write("<br />");
var i=0;
while (i<=10) {
    document.write(i + "<br />");
    i++;
}

document.write("<br />");
var i=20;
do {  
    document.write(i + "<br />");
    i++;  
}
while (i<=25); 
/*

El whileciclo recorre un bloque de código siempre que una condición específica sea verdadera.

El do whilebucle es una variante del bucle while. 
Este ciclo ejecutará el bloque de código una vez, antes de verificar si la condición es verdadera, luego repetirá el ciclo mientras la condición sea verdadera.


*/