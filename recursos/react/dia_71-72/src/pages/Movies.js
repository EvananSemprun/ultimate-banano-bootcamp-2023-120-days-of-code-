import React from "react";
import { Link } from "react-router-dom";
import moviesData from "../movies.json";

const Movies = () => {
  return (
    <div>
      <h1>Lista de películas</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {moviesData.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} style={{ display: "block", textDecoration: "none", color: "black" }}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <span style={{ display: "block", marginTop: "0.5rem" }}>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;