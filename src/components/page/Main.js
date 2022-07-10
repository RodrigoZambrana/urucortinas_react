import React from "react";
import ControlledCarousel from "../carousel/ControlledCarousel";
import OfferedProducts from "../offeredProducts/OfferedProducts";
import Facts from "../facts/Facts";
import Clients from "../clients/Clients";
import MercadoPago from "../mercadoPago/MercadoPago";

export default function Main() {
  return (
    <>
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>

      {/* <div id="loader" className="show">
        <div className="loader"></div>
      </div> */}
      <ControlledCarousel />
      <MercadoPago />
      <OfferedProducts />
      <Facts />
      <Clients />
    </>
  );
}
