const aplicacion = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search);
id = getUrl.get('id')
console.log(id)


const url = 'https://jsonplaceholder.typicode.com/users';
console.log(`${url}/${id}`)
fetch(`${url}/${id}`)
.then((res) => res.json())
.then((data) => console.log(data))

.catch((error) => console.log(error));
