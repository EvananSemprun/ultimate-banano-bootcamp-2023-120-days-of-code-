import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.module.css";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesData, setMoviesData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const apiKey = "e0ae0dba4628aa60e4768f5b77a8071c";
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMoviesData(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Lista de películas</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar película"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="movies-list">
        {moviesData
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((movie) => (
            <li className="movie-item" key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                style={{ display: "block", textDecoration: "none", color: "black" }}
              >
                <img
                  className="movie-poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <span className="movie-title">{movie.title}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;