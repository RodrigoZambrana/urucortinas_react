import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { RUTA_API } from "./Constantes";
import { STORAGE_PRODUCTS_CART } from "./Constantes";

import Product from "./Product";

export default function BudgetForm(props) {
  const [productsCart, setProductsCart] = useState([]);
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
    },
  });
  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = async () => {
    const respuesta = await fetch(`${RUTA_API}/obtener_costos_productos.php`);
    const costos_productos = await respuesta.json();
    // console.log(costos_productos);
    setProductsCart(costos_productos);
    console.log(productsCart);
  };

  const getProductById = async () => {
    console.log("el nunero de select es: " + select);
    const respuesta = await fetch(
      `${RUTA_API}/obtener_videojuego.php?id=${select}`
    );
    const productoById = await respuesta.json();
    setProducto(productoById);
    console.log("el producto FINAL ES:" + JSON.stringify(producto));
  };

  const calcularPresupuesto = (event, formValue) => {
    event.preventDefault();
    const { ancho, alto } = formValue;

    if (ancho == "" || alto == "") {
      toast("Debe completar todos los campos!");
    } else {
    }
  };

  const onChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const addProductCart = (event, formValue) => {
    event.preventDefault();

    // const idsProducts = productsCart;
    // idsProducts.push(id);
    // setProductsCart(idsProducts);
    // localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    // getProductsCart();
    toast("añadido al carrito correctamente.");
  };

  const crearProducto = (event, formValue) => {
    event.preventDefault();
    // toast("los productosn son:" + JSON.stringify(productsCart));
    getProductById(select);
    // producto.id = filterProduct.id;
    // producto.nombre_producto = filterProduct.nombre_producto;
    // producto.ancho = formValue.ancho;
    // producto.alto = formValue.alto;
    // producto.precio = producto.alto * producto.ancho * filterProduct.precio;
    toast("añadido al carrito correctamente.");
  };

  function findArrayElementByTitle(array, id) {
    const newValue = array.find((number) => number.id === id);
    console.log(newValue);
  }

  return (
    <>
      {/* <!-- Location Start --> */}

      <div className="col-lg-6">
        <div className="location-form">
          <h3>Cálculo de presupuesto</h3>
          <Form
            onSubmit={(event) => crearProducto(event, formValue)}
            onChange={onChange}
          >
            <div className="control-group">
              <select
                name="nombres_productos"
                className="form-control"
                onChange={(e) => setSelect(e.target.value)}
              >
                {productsCart.map((elemento) => (
                  <option key={elemento.id} value={elemento.id}>
                    {elemento.nombre_producto}
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

        <h1>{select}</h1>
        {/* <Product
          key={producto.id}
          producto={producto}
          addProductCart={addProductCart}
        /> */}
      </div>
      {/* <!-- Location End --> */}
    </>
  );
}
