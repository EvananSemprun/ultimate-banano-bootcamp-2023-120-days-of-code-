// actividad 1

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


document.write("Hay un total de "+ mas60.length + " alumno(s) con un peso mayor a 60kg"  + "<br />" );




