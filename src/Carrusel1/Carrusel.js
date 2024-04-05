import React from 'react';
import './Carrusel.css';

function Carrusel() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-end carousel-container">
        <div className="col-md-8 ml-auto">
          <div className="owl-carousel owl-theme">
            <div className="item"><img src="https://i.ibb.co/m5SPGSq/Fabuoloso.png" alt="Descripción de la imagen 1" /></div>
            <div className="item"><img src="https://i.ibb.co/VYRsWL6/Lysol.png" alt="Descripción de la imagen 2" /></div>
            <div className="item"><img src="https://i.ibb.co/KsNw4Cq/PinolFF.jpg" alt="Descripción de la imagen 3" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
