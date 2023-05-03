import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/calculator';
import Generador from './pages/generador';
import Calcien from './pages/calcien';// importar la nueva página de detalle de producto

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generador" element={< Generador />} />
        <Route path="/calcien" element={<Calcien />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
