import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "../movies.json";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = moviesData.find((m) => m.id.toString() === movieId);

  return (
    <div className="movie-details">
      <h1 className="movie-title">{movie.title}</h1>
      <img
        className="movie-posterd"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p className="movie-overview">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;