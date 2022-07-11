import React from "react";
import ClientsCarousel from "../carousel/ClientsCarousel";

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
        <ClientsCarousel />
      </div>
    </div>
  );
}
