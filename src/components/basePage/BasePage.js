import React from "react";
import LogoBar from "../topBar/LogoBar";
import NavBar from "../topBar/NavBar";
import Footer from "../page/Footer";

export default function BasePage(props) {
  return (
    <>
      <LogoBar />
      <NavBar />
      <Footer />
    </>
  );
}