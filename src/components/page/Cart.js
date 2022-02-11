import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { STORAGE_PRODUCTS_CART, BASE_PATH } from "./Constantes";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";

import "./Cart.scss";

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productosAgregados, setProductosAgregados] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
    setProductosAgregados(idsProducts);
  };

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
    console.log("Abre Carrito");
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <Button variant="link" className="cart">
        {productosAgregados.length > 0 ? (
          <CartFull onClick={openCart} />
        ) : (
          <CartEmpty onClick={openCart} />
        )}
      </Button>

      <div className="cart-content" style={{ width: widthCartContent }}>
        "Todos los productos"
      </div>
    </>
  );
}
