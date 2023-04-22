import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProductoDetalle from './pages/ProductoDetalle'; // importar la nueva página de detalle de producto

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
