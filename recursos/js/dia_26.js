// actividad 1
/*

1) Se desea realizar una estadística de los pesos de los alumnos de un colegio, de acuerdo a la siguiente tabla:

Alumnos de menos de 40 Kg.

Alumnos entre 40 y 50 Kg.

Alumnos de más de 50 y menos de 60 Kg.

Alumnos de más o igual a 60 Kg

*/
const menosde40 = [];
const entre40y50 = [];
const entre50y60 = [];
const mas60 = [];


var na = prompt("cuantos alumnos hay? ");

for (i=1; i<=na; i++) {
  var ap = prompt("Agrega un peso: ");

if (ap < 40){
  menosde40.push('1');

}else if (ap >= 40 && ap <= 50){
  entre40y50.push('1');

}else if (ap > 50 && ap < 60){
  entre50y60.push('1');

}else{
  mas60.push('1');
}

}

document.write("Hay un total de "+ menosde40.length + " alumno(s) con un peso menor de 40kg" + "<br />" );


document.write("Hay un total de "+ entre40y50.length + " alumno(s) con un peso entre 40kg y 50kg "  + "<br />");


document.write("Hay un total de "+ entre50y60.length + " alumno(s) con un peso de mayor a 50kg y menos a 60kg"  + "<br />");


document.write("Hay un total de "+ mas60.length + " alumno(s) con un peso mayor a 60kg"  + "<br />" + "<br />" + "<br />" );


// actividad 2


/*

2) Calcular el interés que tiene una cuenta de ahorros a fin de año, sabiendo que:

La cuenta genera un interés del 15% anual, lo que equivale a 1.25% mensual.

• El monto inicial se ingresa en el mes de enero y mensualmente se ingresan 250,00 Bs.

• El cálculo se requiere hasta el mes de diciembre.

*/
const im = 250;
const interes = 15;

var ingresoi = parseInt(prompt("cuanto dinero desea depositar ? "));

const itm = im * 11; // 2750

const it = itm + ingresoi;


const total_de_interes = interes * it / 100;
const id = it + total_de_interes;

document.write("el total es: "+ id)