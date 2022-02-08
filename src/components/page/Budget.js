import BudgetForm from "./BudgetForm";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Budget(props) {
  const sendBudget = (event, formValue) => {
    event.preventDefault();
    const { ancho, alto } = formValue;

    if (ancho == "" || alto == "") {
      toast("Debe completar todos los campos!");
    } else {
      const resultado = ancho * alto * 60 + 20;
      toast("Presupuesto calculado con éxito!: " + resultado);
    }
  };

  return (
    <>
      {/* <!-- Location Start --> */}
      <div className="location">
        <div className="container">
          <div className="row">
            <BudgetForm sendBudget={sendBudget} />
            <div className="col-lg-6">
              <div className="section-header text-left">
                <p>Calculá tu presupuesto</p>
                <h2>Información general</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="location-item">
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
      <ToastContainer />
      {/* <!-- Location End --> */}
    </>
  );
}
