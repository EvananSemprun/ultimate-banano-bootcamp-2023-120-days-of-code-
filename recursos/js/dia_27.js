// actividad 3

const ncedula = [];
const nestudiantes = [];
const nmate= [];
const nfisi= [];
const nprogra= [];


var na = prompt("cuantos alumnos hay? ");

for (i=1; i<=na; i++) {
    var cedula = parseInt(prompt("cedula del estudiante "+ i));
    ncedula.push(cedula)

    
    var nombre = parseInt(prompt("nombre del estudiante "+ i));
    nestudiantes.push(nombre)

    
    var mate = parseInt( prompt("nota de matematica del estudiante "+ i));
    nmate.push(mate)

    
    var fisi = parseInt( prompt("nota de fisica del estudiante "+ i));
    nfisi.push(fisi)

    
    var progra = parseInt( prompt("nota de programcion del estudiante "+ i));
    nprogra.push(progra)
}


//-----------------------------------nota promedio
let summate = 0;

for (let i = 0; i < nmate.length; i++) {
    summate += nmate[i];
}
document.write("nota promedio de matematica : " + summate / nmate.length+ "<br />" );


let sumfisi = 0;

for (let i = 0; i < nfisi.length; i++) {
    sumfisi += nfisi[i];
}
document.write("nota promedio de fisica : " + sumfisi / nfisi.length + "<br />");


let sumprogra = 0;

for (let i = 0; i < nprogra.length; i++) {
    sumprogra += nprogra[i];
}
document.write("nota promedio de programcion : " + sumprogra / nprogra.length + "<br />");

//------------------------------------------------------alumnos que apobaron
let aamate = 0;

for (let i = 0; i < nmate.length; i++) {
    if(nmate[i] >= 10){
        aamate += 1;
    }else{
        aamate += 0;
    }
}
document.write("alumnos que aprobaron matematica : " +aamate + "<br />");


let aafisi = 0;

for (let i = 0; i < nfisi.length; i++) {
    if(nfisi[i] >= 10){
        aafisi += 1;
    }else{
        aafisi += 0;
    }
}
document.write("alumnos que aprobaron fisica : " +aafisi + "<br />");

let aaprogre = 0;

for (let i = 0; i < nprogra.length; i++) {
    if(nprogra[i] >= 10){
        aaprogre += 1;
    }else{
        aaprogre += 0;
    }
}
document.write("alumnos que aprobaron programcion : " +aaprogre + "<br />");

//------------------------------------------------------alumnos que reproados
let armate = 0;

for (let i = 0; i < nmate.length; i++) {
    if(nmate[i] <= 10){
        armate += 1;
    }else{
        armate += 0;
    }
}
document.write("alumnos que aplazaron matematica : " +armate + "<br />");


let arfisi = 0;

for (let i = 0; i < nfisi.length; i++) {
    if(nfisi[i] <= 10){
        arfisi += 1;
    }else{
        arfisi += 0;
    }
}
document.write("alumnos que aplazaron fisica : " +arfisi + "<br />");

let arprogre = 0;

for (let i = 0; i < nprogra.length; i++) {
    if(nprogra[i] <= 10){
        arprogre += 1;
    }else{
        arprogre += 0;
    }
}
document.write("alumnos que aplazaron programacion : " +arprogre + "<br />");

//------------------------------------------------------alumnos que aprobaron todo

console.log("alumnos que aprobaron todo")
let  at = 0;

for (let i = 0; i < ncedula.length; i++) {
    if(nmate[i] >= 10 && nfisi[i] >= 10 && nprogra[i]  >= 10 ){
        at +=1;
    }else{
        at +=0;
    }
}
document.write("alumnos que aprobaron todo : " +at + "<br />")
//---------------------------------------------------------------alumnos que aprobaron 1

console.log("alumnos que aprobaron 1")
let  ua = 0;

for (let i = 0; i < ncedula.length; i++) {
    if( (nmate[i] < 10 && nfisi[i] < 10 && nprogra[i]  >= 10) || (nmate[i] >= 10 && nfisi[i] < 10 && nprogra[i]  < 10 ) || (nmate[i] < 10 && nfisi[i] >= 10 && nprogra[i]  < 10 )){
        ua +=1;
    }else{
        ua +=0;
    }
}
document.write("alumnos que aprobaron 1 materia : " +ua + "<br />")

//---------------------------------------------------------------alumnos que aprobaron 2

console.log("alumnos que aprobaron 1")
let  da = 0;

for (let i = 0; i < ncedula.length; i++) {
    if( (nmate[i] < 10 && nfisi[i] >= 10 && nprogra[i]  >= 10) || (nmate[i] >= 10 && nfisi[i] >= 10 && nprogra[i]  < 10 ) || (nmate[i] >= 10 && nfisi[i] < 10 && nprogra[i]  >= 10 )){
        da +=1;
    }else{
        da +=0;
    }
}
document.write("alumnos que aprobaron 2 materias : " +da + "<br />")



//---------------------------------------------------------------nota maxima en cada materia 
console.log("nota")
var m = Math.max(...nmate);
document.write("nota maxima mate  : " +m + "<br />")


var f = Math.max(...nfisi);
document.write("nota maxima fisi: " +f + "<br />")


var p = Math.max(...nprogra);
document.write("nota maxima progra  : " +p + "<br />")