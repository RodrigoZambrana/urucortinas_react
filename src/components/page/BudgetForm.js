import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function BudgetForm(props) {
  return (
    <>
      {/* <!-- Location Start --> */}

      <div class="col-lg-6">
        <div class="location-form">
          <h3>Cálculo de presupuesto</h3>
          <Form>
            <div className="control-group">
              <input type="number" placeholder="Ancho" />
            </div>
            <div className="control-group">
              <input type="number" placeholder="Alto" />
            </div>
            <div>
              <Button class="btn btn-custom" type="submit">
                Calcular
              </Button>
            </div>
          </Form>
        </div>
      </div>
      {/* <!-- Location End --> */}
    </>
  );
}
