import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsFilm } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">
            <AiOutlineHome />
             Inicio
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <BsFilm />
              Películas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;