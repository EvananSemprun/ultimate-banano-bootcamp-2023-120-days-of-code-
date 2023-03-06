const spinner = document.querySelector("#spinner");

function getPokemon(){
  const url_string = window.location.href;
  const url = new URL(url_string);
  const code = url.searchParams.get("code");
  axios.get(`https://pokeapi.co/api/v2/pokemon/${code}`)
  .then(function (response) {
    const data = response.data
    console.log(data)
    document.querySelector("#name").innerHTML= data.name;
    document.querySelector("#num").innerHTML= data.id;
    spinner.style.display = "block";
    const type = data.types;

    var outputtype = '';
    for(var t of type) {
      outputtype += `
      <li> ${t.type.name} </li>
      `;
    }
    document.querySelector("#type").innerHTML= outputtype;
    

    
    var weigth = data.weight.toString();
    var weigthParsed;
    if(weigth.length === 1){
      weigthParsed = weigth.slice(0, -1) + "0" + weigth.slice(0, -1) + "," + weigth.slice(-1) + " kg";;
    }else{
      weigthParsed = weigth.slice(0, -1) + "," + weigth.slice(-1) + " kg";
    }
    document.querySelector("#peso").innerHTML= weigthParsed;



    var height = data.height.toString();
    var heightParsed;
    if(height.length === 1){
      heightParsed = height.slice(0, -1) + "0" + height.slice(0, -1) + "," + height.slice(-1)+" M";
    }else{
      heightParsed = height.slice(0, -1) + "," + height.slice(-1)+" M";
    }
    document.querySelector("#altura").innerHTML=heightParsed

    document.querySelector("#genero").innerHTML= gend(data.name);
    
    function gend(name) {
      if (name == "arceus" ||name ==  "arctovish" || name == "arctozolt" ||name ==  "articuno"||name ==  "azelf" || name == "baltoy" ||name ==  "beldum"||name ==  "blacephalon" || name == "bronzong" ||
      name ==  "bronzor"||name ==  "buzzwole" || name == "calyrex" ||name ==  "carbink"||name ==  "celebi" || name == "celesteela" ||name ==  "claydol"||name ==  "cobalion" || name == "type-null" ||
      name ==  "cosmoem"||name ==  "cosmog" || name == "ditto" /* no encontre otra formas de poner los generos Xd*/ ){
        return "sin genero";
      }
      else {
        return "Macho/Hembra"
      }
    }
    

    const ability = data.abilities;

    var outputability = '';
    for(var a of ability) {
      outputability += `
      <li> ${a.ability.name} </li>
      `;
    }
    document.querySelector("#habi").innerHTML= outputability;

    const move = data.moves;

    var outputmove = '';
    for(var a of move) {
      outputmove += `
      <p> ${a.move.name} </p>
      `;
    }
    document.querySelector("#mov").innerHTML= outputmove;
    document.querySelector("#normal").src= data.sprites.front_default;
    document.querySelector("#normal2").src= data.sprites.front_default;
    document.querySelector("#mujer").src=checkphoto(data.sprites.front_female);
    document.querySelector("#shiny").src= data.sprites.front_shiny;
    document.querySelector("#shinym").src= checkphoto(data.sprites.front_shiny_female);

    function checkphoto(photo) {
      if (photo === null ) {
        return "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f82cc357-e354-4ef7-8b2d-647f6f756800/dbf1jrd-095f7fd1-e33b-4e26-b456-8cbf40d0e5d1.png/v1/fill/w_1024,h_765,q_80,strp/quien_es_ese_pokemon__who_s_that_poke___by_shikomt_by_shikomt_dbf1jrd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY1IiwicGF0aCI6IlwvZlwvZjgyY2MzNTctZTM1NC00ZWY3LThiMmQtNjQ3ZjZmNzU2ODAwXC9kYmYxanJkLTA5NWY3ZmQxLWUzM2ItNGUyNi1iNDU2LThjYmY0MGQwZTVkMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YZOIomNz5t-pjv59EuK-mtru0QgjhlTtGEGPLuzR1hM";
      }
      else if(photo === null){
        return data.sprites.front_default
      }
      else {
        return photo
      }
    }
    spinner.style.display = "none";
  })

  .catch(function (error) {
  console.log(error);
  })


};
