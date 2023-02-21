
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

function show() {
    const na2 = document.querySelector('#nombre').value;
    console.log(na2)
  }
  
  var arrFranquicias = [];
  
  const register = () => {
    const na = document.querySelector('#na').value;
    const empleados = document.querySelector('#empleados').value;
    const estado = document.querySelector('#estado').value;
    const ciudad = document.querySelector('#ciudad').value;
    const address = document.querySelector('#address').value;
    const txtLat = document.querySelector('#txtLat').value;
    const txtLng = document.querySelector('#txtLng').value;
  
    if(na.trim() == "") {
      alert("Introducir nombre");
    
    }else if(estado == "") {
        alert("Debe seleccionar una opcion");
      }
      else if(ciudad == "") {
        alert("Debe seleccionar una opcion");
      }
    else if(empleados.trim() == "") {
      alert("Introducir cantidad");
    }
    else if(isNaN(empleados) == true || empleados.trim() == "") {
      alert("No es un numero");
    } 
    else if(isNaN(txtLat) == true || txtLat.trim() == "") {
      alert("No es un numero");
    }
    else if(isNaN(txtLng) == true || txtLng.trim() == "") {
      alert("Debe registrar longitud validad");
    }
    
    else {
      console.log(na, empleados, estado,ciudad, address,txtLat,txtLng);
  
      const jsn = {
        "na": na,
        "empleados": empleados,
        "estado": estado,
        "ciudad": ciudad,
        "address": (address.trim() == '') ? null : address,
        "txtLat":txtLat,
        "txtLng":txtLng
      }
      console.log(jsn);
      arrFranquicias.push(jsn)
      printTable();
  
      document.querySelector('#na').value = "";
      document.querySelector('#empleados').value = "";
      document.querySelector('#estado').selectedIndex = 0;
      document.querySelector('#ciudad').selectedIndex = 0;
      document.querySelector('#address').value = "";
      document.querySelector('#txtLat').value = "";
      document.querySelector('#txtLng').value = "";
      alert("registrado, para editar vuelva a llenar los espacios en blanco y presione en  editar sobre el elemento que quiera ser actualizado ,este se actualizara y se pondra de ultimo en la lista")
     
    }
    
  }
  
  function printTable() {
    console.log(arrFranquicias);
    var output = '';
    for(var i in arrFranquicias) {
      output += `
        <tr>
          <td id="myP">
            ${arrFranquicias[i].na}
          </td>
          <td>
            ${arrFranquicias[i].estado}
          </td>
          <td>
            ${arrFranquicias[i].ciudad}
          </td>
          <td>
            ${arrFranquicias[i].txtLat}
          </td>
          <td>
            ${arrFranquicias[i].txtLng}
          </td>
          <td>
            ${arrFranquicias[i].empleados}
          </td>
          <td>
          <button
              class="btn"
              onClick="editar(${i})">Editar</button>
            <button
              class="btn"
              onClick="borrar(${i})">Borrar</button>

              
          </td>
        </tr>

      `;
    }
  
    document.getElementById("tbody").innerHTML = output;

    
    
  }
  
  function borrar(id) {
    arrFranquicias.splice(id,1);
    printTable();
  }
  function editar(id) {
    
    arrFranquicias.shift(id,1);
    register();
  }
  let answer = document.getElementById("myP").contentEditable;
