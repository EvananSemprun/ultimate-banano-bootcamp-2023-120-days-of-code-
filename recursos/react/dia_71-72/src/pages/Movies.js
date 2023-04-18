import React, { useState } from "react";
import { Link } from "react-router-dom";
import moviesData from "../movies.json";
import "./Movies.module.css";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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