const poke_container = document.getElementById('poke_container');
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let limit = 17;
let offset = 1;

const colors = {
	fire: '#ff1a1a',
	grass: '#33ff33',
	electric: '#ffff33',
	water: '#0066ff',
	ground: '#ffbf00',
	rock: '#ac7339',
	fairy: '#d11aff',
	poison: '#751aff',
	bug: '#99ff33',
	dragon: '#4d4dff',
	psychic: '#ac00e6',
	flying: '#99ebff',
	fighting: '#ff884d',
	normal: '#f5f5f5',
  	ghost:'#400080',
	dark:'#283e3e',
	ice:'#1ad1ff',
	steel:'669999',
	
};

const main_types = Object.keys(colors);

previous.addEventListener("click", () => {
	if (offset != 1) {
	  offset -= 18;
	  removeChildNodes(poke_container);
	  fetchPokemons(offset, limit);
	}
  });
  
  next.addEventListener("click", () => {
	offset += 18;
	removeChildNodes(poke_container);
	fetchPokemons(offset, limit);
  });



const fetchPokemons = async () => {
	spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
	spinner.style.display = "none";
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const sprite =  pokemon.sprites.front_default;
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
        <div class="img-container">
            <img src="${sprite}" id="spriteContainer"alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h6 class="name">${name}</h6><br>
            <a href="./pokeinfo.html?code=${pokemon.id}" class="but"> Ver detalle </a>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
	
}
function removeChildNodes(parent) {
	while (parent.firstChild) {
	  parent.removeChild(parent.firstChild);
	}
  }

fetchPokemons();