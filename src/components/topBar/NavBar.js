import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <Link to="/" exact="true" className="navbar-brand">
              Menu
            </Link>
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
                <Link to="/roller" className="nav-item nav-link active">
                  Principal
                </Link>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Cortinas
                  </a>
                  <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/roller">
                      Cortinas Roller
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Bandas Verticales
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Venecianas
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Cortinas de enrollar
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Reparación y mantenimiento
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
                    <NavLink className="dropdown-item" to="/roller">
                      Toldos Verticales
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Toldos de Brazo
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Toldos Corredizos
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
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
                    <NavLink className="dropdown-item" to="/roller">
                      Serie 20
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Serie 25
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Serie Probba
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
                      Serie Gala
                    </NavLink>
                    <NavLink className="dropdown-item" to="/roller">
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
                    <NavLink className="dropdown-item" to="/roller">
                      Motorizaciones
                    </NavLink>
                  </div>
                </div>
                <NavLink className="nav-item nav-link" to="/roller">
                  Calculá tu presupuesto
                </NavLink>
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
