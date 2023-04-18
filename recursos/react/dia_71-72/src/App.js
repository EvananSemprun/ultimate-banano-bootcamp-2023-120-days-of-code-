import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./pages/Movies";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Bienvenido a mi sitio web</h1>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<h1>Detalles de la película</h1>} />
      </Routes>
    </Router>
  );
};
