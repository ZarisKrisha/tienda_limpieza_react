import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Componentes/NavBar1/Navbar';
import Carrusel from './Componentes/Carrusel1/Carrusel';
import Principal from './Vistas/Principal/Principal'; // Agrega la importación del componente Principal

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Principal/>
      </div>
    </Router>
  );
}

export default App;
