import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="container">
          <nav
            className="navbar navbar-expand-lg bg-dark navbar-dark"
            align="center"
          >
            <a href="#" className="navbar-brand">
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                {/* <NavLink to="/" exact className="nav-item nav-link">
                  Principal
                </NavLink> */}
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Cortinas
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/cortinas/roller">
                      Cortinas Roller
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/cortinas/bandas-verticales"
                    >
                      Bandas Verticales
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/cortinas/venecianas"
                    >
                      Venecianas
                    </NavLink>
                    <NavLink className="dropdown-item" to="/cortinas/catalanas">
                      Cortinas de enrollar
                    </NavLink>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Toldos y Cerramientos
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/toldos/verticales">
                      Toldos Verticales
                    </NavLink>
                    <NavLink className="dropdown-item" to="/toldos/brazo">
                      Toldos de Brazo
                    </NavLink>
                    <NavLink className="dropdown-item" to="/toldos/corredizo">
                      Toldos Corredizos
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/toldos/cerramientos"
                    >
                      Cerramientos en PVC
                    </NavLink>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Aberturas en Aluminio
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/aberturas/serie-20">
                      Serie 20
                    </NavLink>
                    <NavLink className="dropdown-item" to="/aberturas/serie-25">
                      Serie 25
                    </NavLink>
                    <NavLink className="dropdown-item" to="/aberturas/probba">
                      Serie Probba
                    </NavLink>
                    <NavLink className="dropdown-item" to="/aberturas/gala">
                      Serie Gala
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/aberturas/instalacion"
                    >
                      Servicio de Instalación
                    </NavLink>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Servicios
                  </a>
                  <div className="dropdown-menu">
                    <NavLink
                      className="dropdown-item"
                      to="/servicios/motorizaciones"
                    >
                      Motorizaciones
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to="/servicios/mantenimiento"
                    >
                      Reparación y mantenimiento
                    </NavLink>
                  </div>
                </div>
                {/* <NavLink className="nav-item nav-link" to="/roller">
                  Calculá tu presupuesto
                </NavLink> */}
                <NavLink className="nav-item nav-link" to="/roller">
                  Contactános
                </NavLink>
              </div>
              <div className="ml-auto"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
