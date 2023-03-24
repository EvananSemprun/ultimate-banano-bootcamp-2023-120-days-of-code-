import React, {useState} from 'react';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  const arrLang = [
    {
      "value": "Javascript"
    },
    {
      "value": "Python"
    },
      {
      "value": "PHP"
    },
    {
      "value": "C++"
    },
    {
      "value": "C#"
    }
  ]
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lang, setLang] = useState('');
  const [users, setUsers] = useState([])
  const [text, setText] = useState('')

  const addUsers = () => {
    if(name === "") {
      alert(`Ingrese el nombre`)
    }
    else if(lastName === "") {
      alert(`Ingrese el apellido`)
    }
    else if(lang === "") {
      alert(`Seleccionar lenguaje`)
    }
    else {
      const jsn = {
        "name": name,
        "lastName": lastName,
        "lang": lang
      }

      
      const arrUsers = [...users];
      arrUsers.push(jsn);
      setUsers(arrUsers);
     
      //setUsers([...users, jsn]);

      setName("");
      setLastName('');
      setLang('');
    }
  }

  const updateState = () => {
    setText('Hola a todos, cambie por el estado y por el componente nuevo');
  }

  return (
    <>
      <Header texto={text} />

      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Nombre</label>
      <br />
      <input 
        value={name} 
        onChange={(val) => setName(val.target.value)}/>
      
      <br />
      <br />

      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Apellido</label>
      <br />
      <input 
        value={lastName} 
        onChange={(val) => setLastName(val.target.value)}/>
      <br /><br />

      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Lenguaje</label>
      <br />
      <select
        value={lang}
        onChange={(val) => setLang(val.target.value)}>
        <option value="">Seleccionar</option>
        {
          arrLang.map( (lang, index) => (
            <option key={index} value={lang.value}> {lang.value} </option>
          ))
        }
      </select>
    
      <br /><br />

      <button
        onClick={() => addUsers()}> Agregar </button>

      <br /><br />
      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Usuarios</label>
      <br />

      <ul>
        {
          users.map( (u, index) => (
            <li key={index}>
              <span> {u.name} </span>
              <span> {u.lastName} </span>
              <span> {u.lang} </span>
            </li>
          ))
        }
      </ul>

      <hr />

      <button
        onClick={() => updateState()}> Actualizar </button>

      <br /> <br />
      
      <Button 
        color="#ffffff"
        fondo="blue"
        border="0"
        texto="Actualizar"
        funct={() => updateState()}/>

    </>
  );
}

export default App;
