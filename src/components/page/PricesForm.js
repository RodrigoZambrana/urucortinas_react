import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function PricesForm(props) {
  // const { sendBudget } = props;
  // const baseUrl = "http://localhost:8888/apiFrameworks/";

  const [formValue, setFormValue] = useState({
    nombre_producto: "",
    ancho: "",
    alto: "",
  });

  const onChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const calculoPresupuesto = (event, formValue) => {
    event.preventDefault();
    const { nombre_producto, ancho, alto } = formValue;
    if (nombre_producto == "" || alto == "" || ancho == "") {
      toast("Debe completar todos los campos!");
    } else {
      const presupuesto = ancho * alto * 80;
      toast("El costo es de:" + presupuesto);
    }
  };

  return (
    <>
      {/* <!-- Location Start --> */}

      <div className="col-lg-6">
        <div className="location-form">
          <ToastContainer />

          <h3>Cálculo de presupuesto</h3>
          <Form
            onSubmit={(event) => calculoPresupuesto(event)}
            onChange={onChange}
          >
            <div className="control-group">
              <input
                type="text"
                name="nombre_producto"
                placeholder="nombre producto"
                className="form-control"
              />
            </div>
            <div className="control-group">
              <input
                type="text"
                name="ancho"
                placeholder="ancho"
                className="form-control"
              />
            </div>
            <div className="control-group">
              <input
                type="text"
                name="alto"
                placeholder="alto"
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
