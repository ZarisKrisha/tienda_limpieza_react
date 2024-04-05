import React from 'react';
import Navbar from './NavBar1/Navbar';
import Carrusel from './Carrusel1/Carrusel';
import './App.css'; // Si tienes estilos globales para toda la aplicación, puedes importarlos aquí

function App() {
  return (
    <div>
      <Navbar />
      <Carrusel />
    </div>
  );
}

export default App;
