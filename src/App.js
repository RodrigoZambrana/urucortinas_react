import React from "react";
import { ToastContainer, toast } from "react-toastify";
import MainPage from "./components/pages/MainPage";
import LogoBar from "./components/topBar/LogoBar";
import NavBar from "./components/topBar/NavBar";
import Footer from "./components/footer/Footer";
import RollerPage from "./components/pages/RollerPage";
import BandasVerticalesPage from "./components/pages/BandasVerticalesPage";
import CatalanasPage from "./components/pages/CatalanasPage";
import VenecianasPage from "./components/pages/VenecianasPage";
import ToldosVerticalesPage from "./components/pages/ToldosVerticalesPage";
import CerramientosPage from "./components/pages/CerramientosPage";
import ToldosBrazoPage from "./components/pages/ToldosBrazoPage";
import ToldosZenPage from "./components/pages/ToldosZenPage";
import Serie20Page from "./components/pages/Serie20Page";
import Serie25Page from "./components/pages/Serie25Page";
import SerieProbbaPage from "./components/pages/SerieProbbaPage";
import SerieGalaPage from "./components/pages/SerieGalaPage";
import InstalacionAberturasPage from "./components/pages/InstalacionAberturasPage";
import MotorizacionesPage from "./components/pages/MotorizacionesPage";
import MantenimientoCortinasPage from "./components/pages/MantenimientoCortinasPage";
import AllProductsPage from "./components/offeredProducts/AllProductsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange={false}
            draggable
            pauseOnHover={false}
          />
          <LogoBar />
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            {/* cortinas starts */}
            <Route path="/cortinas/roller">
              <RollerPage />
            </Route>
            <Route path="/cortinas/bandas-verticales">
              <BandasVerticalesPage />
            </Route>
            <Route path="/cortinas/catalanas">
              <CatalanasPage />
            </Route>
            <Route path="/cortinas/venecianas">
              <VenecianasPage />
            </Route>
            {/* cortinas ends */}
            {/* toldos starts */}
            <Route path="/toldos/verticales">
              <ToldosVerticalesPage />
            </Route>
            <Route path="/toldos/cerramientos">
              <CerramientosPage />
            </Route>
            <Route path="/toldos/brazo">
              <ToldosBrazoPage />
            </Route>
            <Route path="/toldos/corredizo">
              <ToldosZenPage />
            </Route>
            {/* toldos ends */}
            {/* aberturas starts */}
            <Route path="/aberturas/serie-20">
              <Serie20Page />
            </Route>
            <Route path="/aberturas/serie-25">
              <Serie25Page />
            </Route>
            <Route path="/aberturas/probba">
              <SerieProbbaPage />
            </Route>
            <Route path="/aberturas/gala">
              <SerieGalaPage />
            </Route>
            <Route path="/aberturas/instalacion">
              <InstalacionAberturasPage />
            </Route>
            {/* aberturas ends */}
            {/* servicios starts */}
            <Route path="/servicios/motorizaciones">
              <MotorizacionesPage />
            </Route>
            <Route path="/servicios/mantenimiento">
              <MantenimientoCortinasPage />
            </Route>
            {/* servicios ends */}
            <Route path="/productos">
              <AllProductsPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
