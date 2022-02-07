import React from "react";
import "./Header.scss";
export default function Header() {
  return (
    <>
      <div class="top-bar">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-12">
              <div class="logo">
                <a href="index.html">
                  <img src="img/logo/logo.svg" alt="logo urucortinas" />
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-md-7 d-none d-lg-block">
              <div class="row">
                <div class="col-4">
                  <div class="top-bar-item">
                    <div class="top-bar-icon">
                      <i class="far fa-clock"></i>
                    </div>
                    <div class="top-bar-text">
                      <h3>Horario de Atención</h3>
                      <p>Lun - Vie, 9:00 - 18:00</p>
                      <p>Sab, 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="top-bar-item">
                    <div class="top-bar-icon">
                      <i class="fa fa-phone-alt"></i>
                    </div>
                    <div class="top-bar-text">
                      <h3>Teléfono</h3>
                      <p>097 365 931</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="top-bar-item">
                    <div class="top-bar-icon">
                      <i class="far fa-envelope"></i>
                    </div>
                    <div class="top-bar-text">
                      <h3>E-mail</h3>
                      <p>ventas@urucortinas.com.uy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-bar">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <a href="#" class="navbar-brand">
              Menu
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div class="navbar-nav mr-auto">
                <a href="index.html" class="nav-item nav-link active">
                  Principal
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Cortinas
                  </a>
                  <div class="dropdown-menu">
                    <a href="productos/roller.html" class="dropdown-item">
                      Cortinas Roller
                    </a>
                    <a href="single.html" class="dropdown-item">
                      Persianas
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Bandas Verticales
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Venecianas
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Toldos y Cerramientos
                  </a>
                  <div class="dropdown-menu">
                    <a href="blog.html" class="dropdown-item">
                      Toldos Verticales
                    </a>
                    <a href="single.html" class="dropdown-item">
                      Toldos de Brazo
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Toldos Zen
                    </a>
                    <a href="blog.html" class="dropdown-item">
                      Cerramientos en PVC
                    </a>
                  </div>
                </div>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Aberturas en Aluminio
                  </a>
                  <div class="dropdown-menu">
                    <a href="blog.html" class="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="single.html" class="dropdown-item">
                      Detail Page
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Team Member
                    </a>
                    <a href="booking.html" class="dropdown-item">
                      Schedule Booking
                    </a>
                  </div>
                </div>
                <a href="service.html" class="nav-item nav-link">
                  Servicios
                </a>
                <a href="price.html" class="nav-item nav-link">
                  Tienda
                </a>
                <a href="location.html" class="nav-item nav-link">
                  Contacto
                </a>
              </div>
              <div class="ml-auto">
                <a class="btn btn-custom" href="#">
                  Whatsapp
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
