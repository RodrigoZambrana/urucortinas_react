import React from "react";
import MainProducts from "../offeredProducts/MainProducts";
import SocialMedia from "../socialMedia/SocialMedia";
import Clients from "../clients/Clients";
import MercadoPago from "../mercadoPago/MercadoPago";
import ControlledCarousel from "../carousel/ControlledCarousel";

export default function MainPage() {
  return (
    <>
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
      <ControlledCarousel />
      <MercadoPago />
      <MainProducts />
      <SocialMedia />
      <Clients />
    </>
  );
}
