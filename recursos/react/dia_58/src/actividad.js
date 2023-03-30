import React, {useState} from 'react';

function Prueba() {
  const arrsec = [
    {
      "value": "A"
    },
    {
      "value": "B"
    },
      {
      "value": "C"
    }
  ]
  const arrsex = [
    {
      "value": "Hombre"
    },
    {
      "value": "Mujer"
    }
  ]
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setsex] = useState('');
  const [fecha, setfecha] = useState('');
  const [sec, setsec] = useState('');
  const [users, setUsers] = useState([])

  const deleteUser = (param) => {
    const arrUsers = [...users];
    arrUsers.splice(param, 1);
    setUsers(arrUsers);
  }

  const editUser = (param) => {
  }

  const addUsers = () => {
    if(name === "") {
      alert(`Ingrese el nombre`)
    }
    else if(lastName === "") {
      alert(`Ingrese el apellido`)
    }else if(fecha === "") {
      alert(`Ingrese fecha`)
    }else if(sex === ""){
      alert(`Seleccionar sexo`)
    }
    else if(sec === "") {
      alert(`Seleccionar Seccion`)
    }
    else {
      const jsn = {
        "name": name,
        "lastName": lastName,
        "fecha":fecha,
        "sex":sex,
        "sec": sec
      }

      
      const arrUsers = [...users];
      arrUsers.push(jsn);
      setUsers(arrUsers);
     

      setName("");
      setLastName('');
      setfecha('');
      setsex('');
      setsec('');
    }
  }

  return (
    <>
      <label style={{
        fontWeight: '600'
      }}>Nombre</label>
      <br />
      <input 
        value={name} 
        onChange={(val) => setName(val.target.value)}/>
      
      <br />
      <br />

      <label style={{
        fontWeight: '600'
      }}>Apellido</label>
      <br />
      <input 
        value={lastName} 
        onChange={(val) => setLastName(val.target.value)}  />
      <br /><br />


      <label style={{
        fontWeight: '600'
      }}>Fecha de nacimiento</label>
      <br />
      <input 
        value={fecha} 
        onChange={(val) => setfecha(val.target.value)} placeholder="dd/mm/aa"/>
      <br /><br />


      <label style={{
        fontWeight: '600'
      }}>sexo</label>
      <br />
      <select
        value={sex}
        onChange={(val) => setsex(val.target.value)}>
        <option value="">Seleccionar</option>
        {
          arrsex.map( (sex, index) => (
            <option key={index} value={sex.value}> {sex.value} </option>
          ))
        }
      </select>
    
      <br /><br />
      <label style={{
        fontWeight: '600'
      }}>seccion</label>
      <br />
      <select
        value={sec}
        onChange={(val) => setsec(val.target.value)}>
        <option value="">Seleccionar</option>
        {
          arrsec.map( (sec, index) => (
            <option key={index} value={sec.value}> {sec.value} </option>
          ))
        }
      </select>
    
      <br /><br />

      <button
        onClick={() => addUsers()}> Agregar </button>

      <br /><br />
      <label style={{
        fontWeight: '600'
      }}>Usuarios</label>
      <br />

      <ul>
        {
          users.map( (u, index) => (
            <ul key={index}>
              <span> Alumno:  {u.name} </span>
              <span> {u.lastName} </span>
              <span> {u.sex} </span>
              <span> Seccion {u.sec} </span>
              <button onClick={() => deleteUser(index)}>Borrar</button>
              <button onClick={() => editUser(index)}>Editar</button>
            </ul>
          ))
        }
      </ul>
    </>
  );
}

export default Prueba;
/* realizado por evanan semprun 28488961*/