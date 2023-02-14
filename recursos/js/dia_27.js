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
console.log(summate / nmate.length );


let sumfisi = 0;

for (let i = 0; i < nfisi.length; i++) {
    sumfisi += nfisi[i];
}
console.log(sumfisi / nfisi.length );


let sumprogra = 0;

for (let i = 0; i < nprogra.length; i++) {
    sumprogra += nprogra[i];
}
console.log(sumprogra / nprogra.length );

//------------------------------------------------------alumnos que apobaron
let aamate = 0;

for (let i = 0; i < nmate.length; i++) {
    if(nmate[i] >= 10){
        aamate += 1;
    }else{
        aamate += 0;
    }
}
console.log(aamate);


let aafisi = 0;

for (let i = 0; i < nfisi.length; i++) {
    if(nfisi[i] >= 10){
        aafisi += 1;
    }else{
        aafisi += 0;
    }
}
console.log(aafisi);

let aaprogre = 0;

for (let i = 0; i < nprogra.length; i++) {
    if(nprogra[i] >= 10){
        aaprogre += 1;
    }else{
        aaprogre += 0;
    }
}
console.log(aaprogre);

//------------------------------------------------------alumnos que reproados
let armate = 0;

for (let i = 0; i < nmate.length; i++) {
    if(nmate[i] <= 10){
        armate += 1;
    }else{
        armate += 0;
    }
}
console.log(armate);


let arfisi = 0;

for (let i = 0; i < nfisi.length; i++) {
    if(nfisi[i] <= 10){
        arfisi += 1;
    }else{
        arfisi += 0;
    }
}
console.log(arfisi);

let arprogre = 0;

for (let i = 0; i < nprogra.length; i++) {
    if(nprogra[i] <= 10){
        arprogre += 1;
    }else{
        arprogre += 0;
    }
}
console.log(arprogre);


//------------------------------------------------------alumnos que aprobaron todo

console.log(nmate.length - armate );

//---------------------------------------------------------------alumnos que aprobaron 1
let unamateria =0;
let dosmateria =0;

for (let i = 0; i < ncedula.length; i++) {
    if( ( nmate.length - aamate ) == 1 ){
        unamateria ++;
    }else if( ( nmate.length - aamate ) == 2  ){
        dosmateria++;
    }
}




let a1mate = 0;



let a1fisi = 0;

let a1progra = 0;