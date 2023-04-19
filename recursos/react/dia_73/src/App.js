import React from "react";
import DateTimePicker from "./components/DateTimePicker";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Selector de Fecha y Hora</h1>
      <DateTimePicker />
    </div>
  );
};

export default App;