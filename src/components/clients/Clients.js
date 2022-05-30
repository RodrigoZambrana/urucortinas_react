import React from "react";
export default function Clients() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="section-header text-center">
          <p>Nuestros clientes</p>
          <h2>
            A lo largo de años de trabajo hemos logrado la confianza de empresas
            y particulares que ven en nosotros la mejor opción a la hora de
            instalar o reparar sus cortinas. Si sos una empresa no dudes
            consultar por servicios especiales de mantenimiento permanente.
          </h2>
        </div>
        <div className="owl-carousel testimonials-carousel">
          <div className="testimonial-item">
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>
          <div className="testimonial-item">
            <img src="img/testimonial-2.jpg" alt="Image" />
          </div>
          <div className="testimonial-item">
            <img src="img/testimonial-3.jpg" alt="Image" />
          </div>
          <div className="testimonial-item">
            <img src="img/testimonial-4.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
