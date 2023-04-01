import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Home from './views/Home/Home';
import List from './views/List/List';
import About from './views/About/About';
import Country from './views/List/Country';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/country/:code" element={<Country />}/>
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <h1>404 <br /> NO HAY NADAAAAAA!!!</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
