import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  return (
    <div className="container-fluid">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/carousel/roller.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a className="btn btn-custom" href="rollers.html">
              Saber más!
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/carousel/catalana.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a className="btn btn-custom" href="rollers.html">
              Saber más!
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/carousel/bandas-verticales.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a className="btn btn-custom" href="rollers.html">
              Saber más!
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
