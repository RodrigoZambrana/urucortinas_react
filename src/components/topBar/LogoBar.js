import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function LogoBar() {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-8">
              <div className="logo">
                <Link to="/">
                  <img src="img/logo/logo.svg" alt="logo urucortinas" />
                </Link>
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
    </>
  );
}
