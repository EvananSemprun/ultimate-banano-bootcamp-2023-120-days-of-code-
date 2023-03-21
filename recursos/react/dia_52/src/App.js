import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./componentes/navegacion/Navbar";
import Inicio from "./componentes/paginas/Inicio";
import Pokemon from "./componentes/paginas/Pokemon";
import Items from "./componentes/paginas/Items";
function App() {
  return (
    <div className="App">
      <h1>hola</h1>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" Component={<Inicio/>} />
          <Route path="pokemon/" Component={<Pokemon/>} />
          <Route path="/items" Component={<Items/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
