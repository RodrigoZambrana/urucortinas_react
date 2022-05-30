import React, { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm";
import useFetch from "../page/useFetch";
import { urlApiProducts } from "../page/Constantes";
import { STORAGE_PRODUCTS_CART } from "../page/Constantes";
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
