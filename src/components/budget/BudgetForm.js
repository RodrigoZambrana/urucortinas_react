import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { RUTA_API } from "./Constantes";
import { opcionesSelectPresupuesto } from "./Constantes";
import { STORAGE_PRODUCTS_CART } from "./Constantes";
import BudgetInfo from "./BudgetInfo";

import Product from "./Product";

export default function BudgetForm(props) {
  const { addProductCart } = props;
  const [productsCost, setProductsCost] = useState([]);
  const [select, setSelect] = useState(-1);

  const [formValue, setFormValue] = useState({
    ancho: "",
    alto: "",
  });

  const [producto, setProducto] = useState({
    producto: {
      id: "",
      nombre_producto: "",
      unidad: "",
      ancho: "",
      alto: "",
      precio: "",
      ruta_imagen: "",
    },
  });

  useEffect(() => {
    getProductsCost();
  }, []);

  const getProductsCost = async () => {
    const respuesta = await fetch(`${RUTA_API}/obtener_costos_productos.php`);
    const costos_productos = await respuesta.json();
    setProductsCost(costos_productos);
  };

  const getProductById = async () => {
    const respuesta = await fetch(
      `${RUTA_API}/obtener_videojuego.php?id=${select}`
    );
    const productoById = await respuesta.json();

    const producto1 = {
      id: productoById.id,
      nombre_producto: productoById.nombre_producto,
      unidad: productoById.unidad,
      ancho: Number(formValue.ancho),
      alto: Number(formValue.alto),
      precio:
        Number(formValue.ancho) *
          Number(formValue.alto) *
          Number(productoById.precio) +
        Number(productoById.costo_instalacion),
      ruta_imagen: productoById.ruta_imagen,
    };
    setProducto(producto1);
  };

  const calcularPresupuesto = (event, formValue) => {
    event.preventDefault();
    const { ancho, alto } = formValue;

    if (ancho == "" || alto == "" || select == -1) {
      toast("Debe completar todos los campos!");
    }
    if (Number(ancho) <= 0 || Number(alto) <= 0) {
      toast("Ancho y Alto deben ser mayores a 0");
    } else {
      getProductById(select);
    }
  };

  const onChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {/* <!-- Location Start --> */}
      <div className="row">
        <div className="col-lg-12">
          <BudgetInfo />
        </div>
        <div className="col-lg-6">
          <div className="location-form">
            <h3>C??lculo de presupuesto</h3>
            <Form
              onSubmit={(event) => calcularPresupuesto(event, formValue)}
              onChange={onChange}
            >
              <div className="control-group">
                <select
                  name="nombres_productos"
                  className="form-control"
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option value="-1">Seleccione una opci??n</option>
                  {opcionesSelectPresupuesto.map((elemento) => (
                    <option key={elemento.id} value={elemento.id}>
                      {elemento.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="control-group">
                <input
                  name="ancho"
                  placeholder="Ancho"
                  pattern="^(\d*\.)?\d+$"
                  title="Ingrese ??nicamente n??meros"
                  className="form-control"
                />
              </div>
              <div className="control-group">
                <input
                  name="alto"
                  placeholder="Alto"
                  pattern="^(\d*\.)?\d+$"
                  title="Ingrese ??nicamente n??meros"
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
        <div className="col-lg-6">
          {producto.precio != null ? (
            <Product
              key={producto.id}
              producto={producto}
              addProductCart={addProductCart}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* <!-- Location End --> */}
    </>
  );
}
