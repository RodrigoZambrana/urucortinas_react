import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./components/topBar/NavBar";
import Footer from "./components/page/Footer";
import Body from "./components/page/Body";
import LogoBar from "./components/topBar/LogoBar";

import { STORAGE_PRODUCTS_CART } from "./components/page/Constantes";

function App() {
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart([]);
    }
  };

  const addProductCart = (producto) => {
    const productosAgregados = productsCart;
    productosAgregados.push(JSON.stringify(producto));
    setProductsCart(productosAgregados);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    console.log(
      "La lista de productos es:" + localStorage.getItem(STORAGE_PRODUCTS_CART)
    );
    getProductsCart();
    toast.success(
      `${producto.nombre_producto} añadido al carrito correctamente.`
    );
  };

  return (
    <div className="App">
      <LogoBar />
      <NavBar />
      <Body
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        addProductCart={addProductCart}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
      <Footer />
    </div>
  );
}

export default App;
