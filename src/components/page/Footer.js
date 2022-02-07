import React from "react";
import "./Header.scss";
export default function Footer() {
  return (
    <>
      {" "}
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="footer-contact">
                <h2>Información de contacto</h2>
                <p>
                  <i class="fa fa-map-marker-alt"></i>
                  123 Street, New York, USA
                </p>
                <p>
                  <i class="fa fa-phone-alt"></i>
                  +012 345 67890
                </p>
                <p>
                  <i class="fa fa-envelope"></i>
                  info@example.com
                </p>
                <div class="footer-social">
                  <a class="btn" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a class="btn" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="btn" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="footer-link">
                <h2>Enlaces de Interés</h2>
                <a href="">Sobre Nostros</a>
                <a href="">Contacto</a>
                <a href="">Productos</a>
                <a href="">Tienda</a>
                <a href="">Servicios</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container copyright">
          <p>
            &copy;
            <a href="#">www.urucortinas.com.uy</a>, All Right Reserved. Designed
            By
            <a href="https://htmlcodex.com">HTML Codex</a>
          </p>
        </div>
      </div>
    </>
  );
}
