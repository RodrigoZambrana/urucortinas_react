import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

export default function MercadoPago() {
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="img/iconos/mercado-pago.jpg" alt="mercado-pago" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-header text-left">
              <p>Pagá de manera fácil y segura</p>
              <h2>Mercado Pago</h2>
            </div>
            <div className="about-content">
              <p>
                Todas tus compras hasta en 12 cuotas sin recargo. Mercado pago
                ofrece una forma rápida y fácil de financiar tus compras. Acepta
                múltiples tarjetas de crédito y te permite pagar en cuotas sin
                interés!
              </p>
              <ul>
                <li>
                  <i className="far fa-check-circle"></i>
                  Todas las tarjetas
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  Hasta 12 cuotas sin recargo.
                </li>
                <li>
                  <i className="far fa-check-circle"></i>
                  Fácil y seguro
                </li>
              </ul>
              {/* <div align="center">
                <a className="btn btn-custom" href="">
                  Más Información
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
