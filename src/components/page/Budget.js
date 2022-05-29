import React, { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm";
import useFetch from "./useFetch";
import { urlApiProducts } from "./Constantes";
import { STORAGE_PRODUCTS_CART } from "./Constantes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Budget(props) {
  const { addProductCart } = props;

  return (
    <>
      <div className="location">
        <div className="container">
          <BudgetForm addProductCart={addProductCart} />
        </div>
      </div>
    </>
  );
}
