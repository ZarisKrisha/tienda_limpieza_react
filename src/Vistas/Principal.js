import React from 'react';
import './Principal.css';
import Carrusel from '../Componentes/Principal/Carrusel/Carrusel';
import BarraCategorias from '../Componentes/Principal/BarraCategoria/BarraCategorias';
import ProductosGrid from '../Componentes/Principal/ProductosGrid/ProductosGrid';

function Principal() {
  return (
    <div className="principal">
      <Carrusel />
      <BarraCategorias />
      <ProductosGrid />
    </div>
  );
}

export default Principal;
