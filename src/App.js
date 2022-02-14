import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/page/Header";
import Footer from "./components/page/Footer";
import Body from "./components/page/Body";
import useFetch from "./hooks/useFetch";
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

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    console.log(
      "La lista de productos es:" + localStorage.getItem(STORAGE_PRODUCTS_CART)
    );
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente.`);
  };

  return (
    <div className="App">
      <Header />
      <Body
        productsCart={productsCart}
        getProductsCart={getProductsCart}
        addProductCart={addProductCart}
      />
      <ToastContainer
        position="bottom-left"
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
