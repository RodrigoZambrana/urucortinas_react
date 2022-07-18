import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function ControlledCarousel() {
  return (
    <div className="container-fluid">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/carousel/roller.png"
            alt="roller image"
          />
          <Carousel.Caption>
            <h1 className="carousel-h1">Cortinas roller</h1>
            <p className="carousel-caption">
              La mejor opción para el hogar u oficina.
            </p>
            <Link className="btn btn-custom" to="/cortinas/roller">
              Saber más!
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/carousel/catalana.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="carousel-h1">Cortinas de enrollar</h1>
            <p className="carousel-caption">
              Sin albañileria. En PVC y aluminio. Excelente aisalnte térmico y
              de sonido
            </p>
            <Link className="btn btn-custom" to="/cortinas/catalanas">
              Saber más!
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/carousel/bandas-verticales.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="carousel-h1">Bandas Verticales</h1>
            <p className="carousel-caption">
              Ideales para cubrir grandes superfices vidriadas
            </p>
            <Link className="btn btn-custom" to="/cortinas/bandas-verticales">
              Saber más!
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
