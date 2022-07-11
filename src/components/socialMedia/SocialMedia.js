import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

export default function SocialMedia() {
  return (
    <>
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
