import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="carousel">
      <div class="container-fluid">
        <div class="owl-carousel">
          <div class="carousel-item">
            <div class="carousel-img">
              <img src="img/carousel/roller.png" alt="roller" />
            </div>
            <div class="carousel-text">
              <h3>Cortinas Roller</h3>
              <h1>Protegé tus espacios de los rayos del sol</h1>
              <p>
                La mejor decoración para tu hogar u oficina. Variedad de colores
                y texturas a elección. Opciones tela blackout o screen con
                filtro UV.
              </p>
              <a class="btn btn-custom" href="rollers.html">
                Saber más!
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-img">
              <img src="img/carousel/catalana.png" alt="catalana" />
            </div>
            <div class="carousel-text">
              <h3>Cortinas de Enrollar</h3>
              <h1>En aluminio y PVC</h1>
              <p>
                Cortinas de enrollar sin albañileria en PVC y aluminio con
                inyección de poliruetano. Confección medida. Solución definitiva
                para la aislación térmica y de sonido. Conocé mas sobre este
                producto!
              </p>
              <a class="btn btn-custom" href="cortinas-enrollar.html">
                Más Información
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-img">
              <img src="img/carousel/bandas-verticales.png" alt="Image" />
            </div>
            <div class="carousel-text">
              <h3>Bandas verticales</h3>
              <h1>Varidad de colores y texturas</h1>
              <p>
                Cortinas de bandas verticales ideales para cubrir grandes
                espacios vidriados. Gran variedad de colores t texturas. Conocé
                mas haciendo click en el botón!
              </p>
              <a class="btn btn-custom" href="">
                Saber más
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-img">
              <img src="img/carousel/mosquiteros.png" alt="Image" />
            </div>
            <div class="carousel-text">
              <h3>Mosquiteros Enrollables</h3>
              <h1>Instalable en todo tipo de ventanas</h1>
              <p>
                Protegé tus espacios de mosquitos e instectos. De fácil
                instalación y gran durablidad.
              </p>
              <a class="btn btn-custom" href="">
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
