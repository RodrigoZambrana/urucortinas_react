import React from "react";
export default function BudgetInfo() {
  return (
    <>
      <div className="row">
        <div className="section-header text-center">
          <p>Calculá tu presupuesto</p>
          <h2>Información general</h2>
        </div>

        <div className="location-item col-6">
          <p>
            El costo informado debe ser confirmado por alguna de las vias de
            contacto detalladas en la seccion "contacto". Los costos pueden
            variar sin previo aviso. Las medidas deben ser de ancho y alto
            respectivamente. En el formulario deberá ingresar únicamente números
            separados por un punto(en caso de ser metros y centímetros).
          </p>
        </div>
      </div>
    </>
  );
}
