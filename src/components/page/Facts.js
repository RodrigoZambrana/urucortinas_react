import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

export default function MercadoPago() {
  return (
    <>
      {" "}
      <div
        className="facts"
        data-parallax="scroll"
        data-image-src="img/facts.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-user"></i>
                <div className="facts-text">
                  <h3 data-toggle="counter-up">1000</h3>
                  <p>Instalaciones realizadas</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-users"></i>
                <div className="facts-text">
                  <h3 data-toggle="counter-up">800</h3>
                  <p>Clientes satisfechos</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="fa fa-map-marker-alt"></i>
                <div className="facts-text">
                  <h3 data-toggle="counter-up">10</h3>
                  <p>Departamentos visitados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="facts"
        data-parallax="scroll"
        data-image-src="img/facts.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="facts-text col-md-8">
              <h3>Seguínos en nuestras redes sociales</h3>
            </div>
            <div className="facts-social col-md-4">
              <a
                className="btn"
                href="https://www.facebook.com/EC-Construcciones-103392575340442"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn"
                href="https://www.instagram.com/eyc.construcciones/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn"
                href="https://www.youtube.com/channel/UC8S4nfrBraJPWNXaBW_piiQ"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
