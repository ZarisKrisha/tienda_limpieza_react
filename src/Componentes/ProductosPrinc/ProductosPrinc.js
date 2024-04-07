import React, { useEffect, useState } from 'react';
import './ProductosPrinc.css';

function ProductosPrinc() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Simulación de carga de datos desde el JSON
    fetch('/data/productos.json')
      .then(response => response.json())
      .then(data => {
        // Obtener los primeros 4 productos del JSON
        const primerosProductos = data.slice(0, 4);
        setProductos(primerosProductos);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/src/Vistas/producto1.js">Detergentes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Limpiadores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cuidado del hogar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Higiene personal</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ProductosPrinc;
