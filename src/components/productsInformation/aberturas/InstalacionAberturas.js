import React from "react";
import { Link } from "react-router-dom";
import RollerCarousel from "../../carousel/RollerCarousel";

export default function InstalacionAberturas() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Instalación de Aberturas</h2>
            </div>
            {/* <div className="col-12">
              <Link to="/" exact="true">
                Principal
              </Link>
              <a href="">Roller</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="single">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <RollerCarousel />
            </div>
            <div className="col-lg-4">
              <div className="section-header text-left">
                {/* <p>Decorativas y funcionales.</p> */}
                <h2>Instalación de Aberturas</h2>
              </div>
              <div className="about-content">
                <p>
                  Cortinas roller de excelente calidad, confeccionadas a medida
                  con los mejores componentes del mercado. Contamos con dos
                  variantes de tela: screen y blackout. Las cortinas Blackout
                  ofrecen una solución única para quienes buscan oscurecer
                  totalmente sus ambientes, mientras que la tela screen permite
                  el pasaje de luz en diferentes graduaciones según el tipo
                  escogido. Este tipo de cortinas son ideales tanto para el
                  hogar como para oficinas.
                </p>
                <ul>
                  <li>
                    <i className="far fa-check-circle"></i> Screen o blackout
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i> Variedad de colores
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Opción manual o
                    motorizada
                  </li>
                  <li>
                    <i className="far fa-check-circle"></i>Hasta 12 cuotas sin
                    interés con Mercado Pago
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
