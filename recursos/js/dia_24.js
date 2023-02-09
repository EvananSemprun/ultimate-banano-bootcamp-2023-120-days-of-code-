var miPerro = {
  nombre: "Gino",
  edad: 5,
  peso: 6,
  raza: "Beagle",
};

var miObjeto = {
  5: "cinco",
};
//--------------------------------------------------
/*En JavaScript, un objeto es una estructura de datos que contiene un conjunto de propiedades, cada una de las cuales tiene un valor asociado. 
Las propiedades de un objeto pueden ser de cualquier tipo, incluidos otros objetos, y pueden ser accedidas y modificadas mediante notación de punto (.) 
o notación de corchetes ([]).

*/
var persona = {
  nombre: "John",
  apellido: "Doe",
  edad: 30,
};
//Después de crear un objeto, puede acceder a sus propiedades de la siguiente manera:

console.log(persona.nombre); // Imprime "John"
console.log(persona["apellido"]); // Imprime "Doe"
// También puede agregar o modificar las propiedades de un objeto de la siguiente manera:

persona.direccion = "123 Main St";
persona.edad = 31;
/*JavaScript también permite que los objetos tengan métodos, que son funciones que están asociadas a un objeto y pueden ser invocadas mediante la notación de punto. 
Aquí hay un ejemplo de cómo se puede agregar un método a un objeto:
*/
var persona = {
  nombre: "John",
  apellido: "Doe",
  edad: 30,
  saludar: function () {
    console.log("Hola, mi nombre es " + this.nombre);
  },
};

persona.saludar(); // Imprime "Hola, mi nombre es John"
//------------------------------------
var miPerro = {
  nombre: "Gino",
  edad: 5,
  peso: 6,
  raza: "Beagle",
};

console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);

// Puedes crear objetos de diferentes maneras en JavaScript, una de las más comunes es utilizando la notación literal de objetos:

//---------------------------------------------------------------------------------------------------
var miCuaderno = {
  color: "verde",
  categoria: 3,
  "numero de paginas": 200,
  "numero de hojas": 100,
};

console.log(miCuaderno["color"]); // Notación de corchetes
console.log(miCuaderno.color); // Notación de punto

console.log(miCuaderno["numero de paginas"]); // Notación de corchetes
// console.log(miCuaderno.numero de paginas); // No funciona porque tiene espacios

// Posibles modificaciones

// camelCase (más común)
var miCuaderno = {
  color: "verde",
  categoria: 3,
  numeroDePaginas: 200,
  numeroDeHojas: 100,
};

console.log(miCuaderno.numeroDePaginas);
console.log(miCuaderno.numeroDeHojas);
//-------------------------------------------------------------
var resultados = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566",
};

var posicion = 4;

console.log(resultados[posicion]);

//----------------------------------------
var mochila = {
  color: "azul",
  tamaño: "mediano",
  contenido: ["botella de agua", "cuaderno"],
};

console.log(mochila.color); // azul
mochila.color = "verde";
console.log(mochila.color); // verde

mochila.contenido.push("lápiz");

mochila.contenido = [];
console.log(mochila.contenido);
//----------------------------------------
var curso = {
  titulo: "Aprende JavaScript desde Cero",
  idioma: "Español",
  duracion: 30,
};

// Notación de punto
curso.vistas = 34500;
console.log(curso.vistas);

// Notación de corchetes
curso["vistas"] = 34500;
console.log(curso.vistas);
//----------------------------------------
function buscarElementoQuimico(simbolo) {
  var elementoQuimico = "";

  switch (simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Azufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
      break;
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
}

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));
//----------------------------------------
var miCuaderno = {
  color: "verde",
  categoria: 3,
  precio: 4.56,
};

console.log(miCuaderno.hasOwnProperty("color")); // true
console.log(miCuaderno.hasOwnProperty("origen")); // false

// Ejemplo

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}

console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "origen"));
//----------------------------------------
var ordenesDePizzas = [
  {
    tipo: "margarita",
    tamaño: "individual",
    precio: 5.67,
    toppings: ["extra queso", "champiñones", "piña"],
    paraLlevar: true,
  },
  {
    tipo: "cuatro quesos",
    tamaño: "familiar",
    precio: 18.34,
    toppings: ["extra queso", "pimentón"],
    paraLlevar: false,
  },
];

console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[1]);

console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]["tipo"]);

console.log(ordenesDePizzas[0].precio);
console.log(ordenesDePizzas[0]["precio"]);

// Añadiendo una tercera pizza

var ordenesDePizzas = [
  {
    tipo: "margarita",
    tamaño: "individual",
    precio: 5.67,
    toppings: ["extra queso", "champiñones", "piña"],
    paraLlevar: true,
  },
  {
    tipo: "cuatro quesos",
    tamaño: "familiar",
    precio: 18.34,
    toppings: ["extra queso", "pimentón"],
    paraLlevar: false,
  },
  {
    tipo: "napolitana",
    tamaño: "individual",
    precio: 6.78,
    toppings: [],
    paraLlevar: true,
  },
];
//----------------------------------------
var miReceta = {
  descripcion: "mi postre favorito",
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: "100 grs",
      sal: "1 cucharadita",
      agua: "1 taza",
    },
    cobertura: {
      azucar: "120 grs",
      chocolate: "4 cucharadas",
      mantequilla: "200 grs",
    },
  },
};

console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);

console.log(miReceta.ingredientes.masa);

console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);

console.log(miReceta.ingredientes.cobertura);

console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);

//----------------------------------------
var misPlantas = [
  {
    tipo: "flores",
    lista: ["rosas", "tulipanes", "dientes de león"],
  },
  {
    tipo: "árboles",
    lista: ["abeto", "pino", "abedul"],
  },
];

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);

//----------------------------------------
// Puedes borrar una propiedad de un objeto en JavaScript usando la palabra clave delete.
var persona = {
  nombre: "John",
  apellido: "Doe",
  edad: 30
};

delete persona.edad;

console.log(persona); // Imprime "{ nombre: 'John', apellido: 'Doe' }"
//Después de usar delete para borrar la propiedad edad, ya no está disponible en el objeto persona.
//----------------------------------------
