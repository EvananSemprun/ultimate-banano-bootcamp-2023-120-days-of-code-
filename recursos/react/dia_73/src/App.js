import React, { useState } from "react";
import DateTimePicker from "./components/DateTimePicker";
import "./App.css";
import "./AppDarkMode.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="app-title">Selector de Fecha y Hora</h1>
      <DateTimePicker />
      <button onClick={toggleDarkMode}>
        {darkMode ? "Modo claro" : "Modo oscuro"}
      </button>
    </div>
  );
};

export default App;