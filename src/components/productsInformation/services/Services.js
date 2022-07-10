import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

export default function MercadoPago() {
  return (
    <div className="service">
      <div className="container">
        <div className="section-header text-center">
          <p>Servicios</p>
          <h2>Mantenimiento y Reparación de cortinas</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-car-wash-1"></i>
              <h3>Reparación de Cortinas</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                velit non metus tortor
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-car-wash"></i>
              <h3>Cambio de mecanismos</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                velit non metus tortor
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-vacuum-cleaner"></i>
              <h3>Mantenimento</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                velit non metus tortor
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-item">
              <i className="flaticon-seat"></i>
              <h3>Motorizaciones</h3>
              <p>
                Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare
                velit non metus tortor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
