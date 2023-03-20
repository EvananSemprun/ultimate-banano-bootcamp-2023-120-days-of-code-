import React, {useEffect,useState} from 'react'

const RandomUser = () => {
    const[user,setUser] = useState(null);
/**
 useEffect es un hook en React que te permite ejecutar efectos secundarios en tu componente. 
 Los efectos secundarios pueden ser acciones asíncronas, 
 como hacer una solicitud de red, modificar el DOM, suscribirte a eventos del navegador o actualizar el estado de tu componente.

El hook useEffect toma dos argumentos: el primero es una función que contiene la lógica del efecto secundario 
y el segundo es una matriz de dependencias que indica a React cuándo debe volver a ejecutar la función de efecto secundario. 
Si la matriz de dependencias está vacía, la función de efecto secundario solo se ejecutará una vez después de que el 
componente se monte en el DOM. Si la matriz de dependencias contiene variables, 
la función de efecto secundario se ejecutará cada vez que cualquiera de esas variables cambie.

El hook useEffect es una herramienta poderosa para manejar los efectos secundarios en tu aplicación React, 
y es importante usarlo correctamente para evitar problemas de rendimiento y comportamiento inesperado en tu aplicación.
 */
    useEffect(()=> {
        fetch("https://api.randomuser.me")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const userData = {
                name: data.results[0].name.first,
                email:  data.results[0].email,
                picture: data.results[0].picture.thumbnail
            }
            setUser(userData);
        });
    }, []);
  return (
    <div>
        {user ? (<div>
        <img src={user.picture} />
        <h1>{user.name} </h1>
        <p>{user.email} </p>
        </div>
        ) : null}
    </div>
  )
}

export default RandomUser