import React from "react";
import ControlledCarousel from "../carousel/ControlledCarousel";
import MainProducts from "../offeredProducts/MainProducts";
import Facts from "../facts/Facts";
import Clients from "../clients/Clients";
import MercadoPago from "../mercadoPago/MercadoPago";

export default function Main() {
  return (
    <>
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
      <ControlledCarousel />
      <MercadoPago />
      <MainProducts />
      <Facts />
      <Clients />
    </>
  );
}
