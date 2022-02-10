import React, { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm";
import useFetch from "./useFetch";
import { urlApiProducts } from "./Constantes";
import { STORAGE_PRODUCTS_CART } from "./Constantes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Budget(props) {
  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductsCart] = useState([]);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart([]);
    }
  };

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente.`);
  };

  useEffect(() => {
    getProductsCart();
  }, []);

  return (
    <>
      {/* <!-- Location Start --> */}
      <div className="location">
        <div className="container">
          <div className="row">
            <BudgetForm products={products} addProductCart={addProductCart} />

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
      {/* <!-- Location End --> */}
    </>
  );
}
