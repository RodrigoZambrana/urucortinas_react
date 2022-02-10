import React, { useState, useEffect } from 'react'
import { STORAGE_PRODUCTS_CART } from './Constantes'
import './Header.scss'
import TopMenu from './TopMenu'

export default function Header() {
  const [productsCart, setProductsCart] = useState([])

  useEffect(() => {
    getProductsCart()
  }, [])

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART)

    if (idsProducts) {
      setProductsCart(idsProducts)
    } else {
      setProductsCart([])
    }
  }

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo/logo.svg" alt="logo urucortinas" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="far fa-clock"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Horario de Atención</h3>
                      <p>Lun - Vie, 9:00 - 18:00</p>
                      <p>Sab, 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="fa fa-phone-alt"></i>
                    </div>
                    <div className="top-bar-text">
                      <h3>Teléfono</h3>
                      <p>097 365 931</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="top-bar-text">
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
                <div>
                  {!productsCart.length ? (
                    <TopMenu
                      productsCart={productsCart}
                      getProductsCart={getProductsCart}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div className="ml-auto"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
