import React from "react";
export default function Budget() {
  return (
    <>
      {/* <!-- Location Start --> */}
      <div class="location">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="location-form">
                <h3>Cálculo de presupuesto</h3>
                <form>
                  <div class="control-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Ancho"
                      required="required"
                    />
                  </div>
                  <div class="control-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Alto"
                      required="required"
                    />
                  </div>
                  <div>
                    <button class="btn btn-custom" type="submit">
                      Calcular
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="section-header text-left">
                <p>Calculá tu presupuesto</p>
                <h2>Información general</h2>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="location-item">
                    <p>
                      El costo informado debe ser confirmado por alguna de las
                      vias de contacto detalladas en la seccion "contacto". Los
                      costos pueden variar sin previo aviso.Las medidas deben
                      ser de ancho y alto. La medida final de la tela es 3,5
                      centimetros menor que la medida final de la cortina.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Location End --> */}
    </>
  );
}
