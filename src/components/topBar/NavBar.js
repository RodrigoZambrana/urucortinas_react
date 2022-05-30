import React from "react";
export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              Menu
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
                <a href="index.html" className="nav-item nav-link active">
                  Principal
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Cortinas
                  </a>
                  <div className="dropdown-menu">
                    <a href="productos/roller.html" className="dropdown-item">
                      Cortinas Roller
                    </a>
                    <a href="single.html" className="dropdown-item">
                      Persianas
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Bandas Verticales
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Venecianas
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Toldos y Cerramientos
                  </a>
                  <div className="dropdown-menu">
                    <a href="blog.html" className="dropdown-item">
                      Toldos Verticales
                    </a>
                    <a href="single.html" className="dropdown-item">
                      Toldos de Brazo
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Toldos Zen
                    </a>
                    <a href="blog.html" className="dropdown-item">
                      Cerramientos en PVC
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Aberturas en Aluminio
                  </a>
                  <div className="dropdown-menu">
                    <a href="blog.html" className="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="single.html" className="dropdown-item">
                      Detail Page
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Team Member
                    </a>
                    <a href="booking.html" className="dropdown-item">
                      Schedule Booking
                    </a>
                  </div>
                </div>
                <a href="service.html" className="nav-item nav-link">
                  Servicios
                </a>
                <a href="price.html" className="nav-item nav-link">
                  Tienda
                </a>
                <a href="location.html" className="nav-item nav-link">
                  Contacto
                </a>
              </div>
              <div className="ml-auto"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
