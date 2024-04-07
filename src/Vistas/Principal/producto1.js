import React, { useEffect, useState } from 'react';
import './Producto.css';

function Producto() {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos desde el JSON
    fetch('/data/productos.json')
      .then(response => response.json())
      .then(data => {
        // Obtener el primer producto del JSON
        const primerProducto = data[0];
        setProducto(primerProducto);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={producto.Imagen1} className="img-fluid" alt={producto.Nombre} />
        </div>
        <div className="col-md-6">
          <h2>{producto.Nombre}</h2>
          <p className="descripcion">{producto.Descripcion}</p>
          <p className="precio">Precio: ${producto.Precio.toFixed(2)}</p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Producto;
