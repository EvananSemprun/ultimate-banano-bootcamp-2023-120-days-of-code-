const results = document.querySelector('#results');
const form = document.querySelector('#formulario');
const small = document.querySelector('small');
const pagesContainer = document.querySelector('#pages');

const register_per_page = 24;
let totalPages;
let iterador;
let currentPage = 1;

window.onload = () => {
  form.addEventListener('submit', validateForm);
}

function validateForm(e) {
  e.preventDefault();
  const termSearch = document.querySelector('#termino').value;

  if(termSearch === '') {
    showMessage('Agregue un término de búsqueda');
    return;
  } else {
    searchAPI();
  }

}
async function searchAPI() {
  const term = document.querySelector('#termino').value;

  const key = '26772036-8bdb1f5e03ec7cf273b95eca5';
  const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${register_per_page}&page=${currentPage}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    totalPages = calcPages(data.totalHits);
    renderHTML(data.hits);
  } catch(error) {
    console.log(error);
  }
}
// Generator Pages
function *createPages(total) {
  for(let i = 1; i<= total; i++){
    yield i;
  }
}
// calc per page
function calcPages(total) {
  return parseInt(Math.ceil(total / register_per_page));
}
// render html
function renderHTML(images) {
  clearHTML(results);
  images.forEach(image => {
    const { previewURL, likes, views, largeImageURL } = image;

    results.innerHTML += `
      <div class="asi_container_images">
        <img class="asi_images" src="${previewURL}" >
        <div class="contenido"> 
          <p>${likes} <span>Likes</span></p>
          <p>${views} <span>Views</span></p>
          <a class="asi_btn" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
            Ver Imagen
          </a>
        </div>
      </div>
    `;
  });
  showPages();
}
// show per page 
function showPages() {
  clearHTML(pagesContainer);
  iterador = createPages(totalPages);

  while(true) {
    const { value, done } = iterador.next();
    if(done) return;

    const boton = document.createElement('a');
    boton.href = '#';
    boton.dataset.page = value;
    boton.textContent = value;
    boton.classList.add('next');
    boton.onclick = () => {
      currentPage = value;
      searchAPI()
    }

    pagesContainer.appendChild(boton);
  }
}
// Show Message in HTML
function showMessage(message){
  clearHTML(small);
  const alert = document.createElement('p');
  alert.textContent = message;
  small.appendChild(alert);
  // alert time
  setTimeout(() => {
    alert.remove();
  }, 3000);
}
// clear html dinamic
function clearHTML(clear) {
  while(clear.firstChild) {
    clear.removeChild(clear.firstChild);
  }
}