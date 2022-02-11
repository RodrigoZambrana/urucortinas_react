import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { RUTA_API } from "./Constantes";
import { opcionesSelectPresupuesto } from "./Constantes";
import { STORAGE_PRODUCTS_CART } from "./Constantes";

import Product from "./Product";

export default function BudgetForm(props) {
  const [productsCart, setProductsCart] = useState([]);
  const [productsCost, setProductsCost] = useState([]);

  const [select, setSelect] = useState();

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
      imagen: "",
    },
  });

  useEffect(() => {
    getProductsCost();
  }, []);

  const getProductsCost = async () => {
    const respuesta = await fetch(`${RUTA_API}/obtener_costos_productos.php`);
    const costos_productos = await respuesta.json();
    setProductsCost(costos_productos);
    console.log("Los productos son:" + productsCart);
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
      ancho: formValue.ancho,
      alto: formValue.alto,
      precio:
        formValue.ancho * formValue.alto * productoById.precio +
        Number(productoById.costo_instalacion),
      imagen: productoById.imagen,
    };

    setProducto(producto1);
    console.log("el producto FINAL ES:" + JSON.stringify(producto1));
  };

  const calcularPresupuesto = (event, formValue) => {
    event.preventDefault();
    const { ancho, alto } = formValue;

    if (ancho == "" || alto == "" || select == 0) {
      toast("Debe completar todos los campos!");
    } else {
      getProductById(select);
      toast("El producto es!" + JSON.stringify(producto));
    }
  };

  const onChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const addProductCart = () => {
    const addProducts = productsCart;
    addProducts.push(producto);
    setProductsCart(addProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success("Agregado correctamente");
  };

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
  };

  return (
    <>
      {/* <!-- Location Start --> */}

      <div className="col-lg-6">
        <div className="location-form">
          <h3>Cálculo de presupuesto</h3>
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

        <div>
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
