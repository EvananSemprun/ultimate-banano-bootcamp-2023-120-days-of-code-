const aplicacion = document.querySelector(".container")
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        const p = document.createElement('p')
        p.innerHTML = usuario.name
        aplicacion.appendChild(p)
    });
})
.catch(error => console.log(error))