import React from "react";
import ControlledCarousel from "../carousel/ControlledCarousel";
import OfferedProducts from "../offeredProducts/OfferedProducts";
import Facts from "../facts/Facts";
import Clients from "../clients/Clients";
import MercadoPago from "../mercadoPago/MercadoPago";

export default function Main() {
  return (
    <>
      <ControlledCarousel />
      <MercadoPago />
      <OfferedProducts />
      <Facts />
      <Clients />
    </>
  );
}
