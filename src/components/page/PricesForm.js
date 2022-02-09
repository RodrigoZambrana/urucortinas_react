import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function PricesForm(props) {
  // const { sendBudget } = props;
  const baseUrl = "http://localhost:8888/apiFrameworks/";

  const [formValue, setFormValue] = useState({
    id: 0,
    nombre_producto: "",
    unidad: "",
    precio: 0,
  });

  const onChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const addPrice = (event, formValue) => {
    event.preventDefault();
    const { id, nombre_producto, unidad, precio } = formValue;

    if (id == "" || nombre_producto == "" || unidad == "" || precio == "") {
      toast("Debe completar todos los campos!");
    } else {
      peticionPost();

      toast(
        "Aca consulto a la base de datos con valores: " +
          id +
          "_" +
          nombre_producto +
          "_" +
          unidad +
          "_" +
          precio
      );
    }
  };

  const peticionPost = async () => {
    var f = new FormData();
    f.append("id", formValue.id);
    f.append("nombre_producto", formValue.nombre_producto);
    f.append("unidad", formValue.unidad);
    f.append("precio", formValue.precio);
    f.append("METHOD", "POST");
    await axios
      .post(baseUrl, f)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const peticionGet = async () => {
  //   await axios
  //     .get(baseUrl)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        toast("El resultado es: " + response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <>
      {/* <!-- Location Start --> */}

      <div className="col-lg-6">
        <div className="location-form">
          <h3>Cálculo de presupuesto</h3>
          <Form
            // onSubmit={(event) => sendBudget(event, formValue)}
            onSubmit={(event) => peticionGet(event)}
            onChange={onChange}
          >
            <div className="control-group">
              <input
                name="id"
                type="number"
                placeholder="id"
                className="form-control"
              />
            </div>
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
                name="unidad"
                placeholder="unidad"
                className="form-control"
              />
            </div>
            <div className="control-group">
              <input
                type="number"
                name="precio"
                placeholder="precio"
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
