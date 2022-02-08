import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function BudgetForm(props) {
  const { sendBudget } = props;
  const [formValue, setFormValue] = useState({
    ancho: "",
    alto: "",
  });

  const onChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {/* <!-- Location Start --> */}

      <div className="col-lg-6">
        <div className="location-form">
          <h3>Cálculo de presupuesto</h3>
          <Form
            onSubmit={(event) => sendBudget(event, formValue)}
            onChange={onChange}
          >
            <div className="control-group">
              <input
                name="ancho"
                type="number"
                placeholder="Ancho"
                className="form-control"
              />
            </div>
            <div className="control-group">
              <input
                type="number"
                name="alto"
                placeholder="Alto"
                className="form-control"
              />
            </div>
            <div>
              <Button className="btn btn-custom" type="submit">
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
