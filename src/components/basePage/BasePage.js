import React from "react";
import LogoBar from "../topBar/LogoBar";
import NavBar from "../topBar/NavBar";
import Footer from "../footer/Footer";
import Main from "../page/Main";

export default function BasePage(props) {
  return (
    <>
      <LogoBar />
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}
