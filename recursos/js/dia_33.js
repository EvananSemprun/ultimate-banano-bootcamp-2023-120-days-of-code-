const cargarpelicula = async () => {
  try {
    const respuesta = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=e0ae0dba4628aa60e4768f5b77a8071c&language=es-MX"
    );
    console.log(respuesta);

    const datos =await respuesta.json();
    
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};
cargarpelicula();
