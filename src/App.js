import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Vistas/Principal';
import ProductoIndv from './Vistas/ProductoIndv';
import NavBar from './Componentes/NavBar/Navbar';
import Footer from './Componentes/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/producto/:ID" element={<ProductoIndv />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
